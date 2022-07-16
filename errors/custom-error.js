/**
 * Create a custom error that extends the built-in Error class
 */
class CustomAPIError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode
    }
}


/**
 * method to create a new error 
*/
const createCustomError = (msg,statusCode) => {
    return new CustomAPIError(msg,statusCode);
}

//any module that imports the methods can create a custom error
module.exports = {createCustomError, CustomAPIError};