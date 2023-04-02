export class AppError extends Error {
  constructor(message, statusCode, stringError) {
    super(message);
    this.statusCode = statusCode;
    this.stringError = stringError;
  }
}
