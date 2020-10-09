class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const StatusCode = {
    SUCCESS_CODE: 'SUCCESSFULLY ADDED',
    EMAIL_NOT_VERIFIED: 'EMAIL_NOT_VERIFIED',
    UNAUTHORIZED: 'UNAUTHORIZED',
    TOKEN_EXPIRE: 'TOKEN_EXPIRE',
    DUPLICATED: 'DUPLICATED',
    WRONG_PASSWORD: 'WRONG_PASSWORD',
    SERVER_ERROR: 'SERVER_ERROR',
    NOT_FOUND_ERR: 'NOT FOUND'
};

module.exports = ErrorResponse;
module.exports.StatusCode = StatusCode;