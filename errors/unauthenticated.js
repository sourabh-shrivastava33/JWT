const { StatusCodes } = require("http-status-codes");
const CustomApiError = require("./custom-error");

class UnauthencatedError extends CustomApiError {
	constructor(message) {
		super(message);
		this.statusCode = StatusCodes.UNAUTHORIZED;
	}
}
module.exports = UnauthencatedError;
