import { getReasonPhrase, StatusCodes } from "http-status-codes";
import { GeneralError } from "../helpers/GeneralError";

export default (err, req, res, next) => {
  if (err instanceof GeneralError) {
    const statusCode = err.statusCode;
    return res.status(statusCode).json({
      error: getReasonPhrase(statusCode),
      message: err.message,
    });
  }

  const message = !!err.message ? err.message : "Something Went Wrong!";

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    err: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    message,
  });
};