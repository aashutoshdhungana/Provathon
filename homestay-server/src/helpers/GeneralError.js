import { StatusCodes } from "http-status-codes";

class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }

  getCode = () => {
    if (this instanceof BadRequestError) {
      console.log(StatusCodes.BAD_REQUEST);
      return StatusCodes.BAD_REQUEST;
    }
    if (this instanceof NotFoundError) {
      return StatusCodes.NOT_FOUND;
    }
    if (this instanceof UnAuthorizedError) {
      return StatusCodes.UNAUTHORIZED;
    }
  };
}

class BadRequestError extends GeneralError {}
class NotFoundError extends GeneralError {}
class UnAuthorizedError extends GeneralError {}

export { GeneralError, BadRequestError, NotFoundError, UnAuthorizedError };