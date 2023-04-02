const reqOptions = ["body", "params", "query", "headers"];
import { AppError } from "./../utilities/errorClassMessage.js";

export const validatioin = (schema) => {
  return (req, res, next) => {
    const validationError = [];
    reqOptions.forEach((option) => {
      if (schema[option]) {
        const result = schema[option].validate(req[option], {
          abortEarly: false,
        });
        if (result?.error?.details)
          return validationError.push(result.error.details);
      }
    });
    validationError.length
      ? next(new AppError("validation Error", 401, validationError))
      : next();
  };
};
