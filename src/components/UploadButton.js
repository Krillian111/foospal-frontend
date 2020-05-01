import React from 'react';
import PropTypes from 'prop-types';

const UploadButton = ({ onChangeIdConsumer }) => {
    const csvInputId = 'csv-input-id';
    return (
        <div>
            <input
                type="file"
                id={csvInputId}
                onChange={() => onChangeIdConsumer(csvInputId)}
            />
        </div>
    );
};

UploadButton.propTypes = {
    onChangeIdConsumer: PropTypes.func.isRequired,
};

export default UploadButton;
