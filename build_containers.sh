#!/bin/bash

OPTIND=1

while getopts "h?:f:b:l" opt; do
    case "$opt" in
    h|\?)
        echo "Usage: $0 [ -f FRONTEND TAG/BRANCH ] [ -b BACKEND TAG/BRANCH ] [ -l (local build) ]"
        echo "If tags/branches are not given, 'master' will be used"
        echo ""
        echo "'-l' will switch to local build, assuming PWD=/some/path/foospal-frontend"
        echo "and presence of /some/path/foospal-backend. Containers will be tagged as 'development'"
        exit 0
        ;;
    b)  BACKEND=${OPTARG}
        ;;
    f)  FRONTEND=${OPTARG}
        ;;
    l)  LOCAL=true
        ;;
    esac
done

ROOTDIR=$(pwd)

if [[ $LOCAL == "true" ]]; then
    BACKEND_VERSION=development
    FRONTEND_VERSION=development
else
    BACKEND_VERSION=${BACKEND:-master}
    FRONTEND_VERSION=${FRONTEND:-master}
fi

echo "Setting versions in docker-compose.yml"
sed -i -e 's/image:\ foospal-backend:.*/image:\ foospal-backend:'"${BACKEND_VERSION}"'/g' docker-compose.yml
sed -i -e 's/image:\ foospal-frontend:.*/image:\ foospal-frontend:'"${FRONTEND_VERSION}"'/g' docker-compose.yml

if [[ $LOCAL == "true" ]]; then
    echo "Starting local mode"

    echo "Building the frontend container"
    docker build -t $(basename $(pwd)):$FRONTEND_VERSION .

    cd ../foospal-backend

    echo "Building the backend container"
    docker build -t $(basename $(pwd)):$BACKEND_VERSION .
else
    echo "Cloning temporary repositories"
    mkdir -p /tmp/foospal/
    cd /tmp/foospal/
    git clone git@github.com:Krillian111/foospal-frontend.git
    git clone git@github.com:Krillian111/foospal-backend.git

    echo "Building the frontend container"
    cd foospal-frontend
    git pull origin $FRONTEND_VERSION
    git checkout $FRONTEND_VERSION
    docker build -t $(basename $(pwd)):$FRONTEND_VERSION .

    cd ..

    echo "Building the backend container"
    cd foospal-backend
    git pull origin $BACKEND_VERSION
    git checkout $BACKEND_VERSION
    docker build -t $(basename $(pwd)):$BACKEND_VERSION .

    cd ..

    echo "Removing temporary repositories"
    rm -rf /tmp/foospal/
fi

echo "Starting docker-compose"
cd $ROOTDIR
docker-compose up -d