FROM node:13
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 8080

CMD ["serve" ,"-s", "build", "-l", "8080"]