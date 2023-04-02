export const globalError = (err, req, res, next) => {
  let code = err.statusCode || 500;
  // console.log(err.statusCode);
  // console.log(err);
  let stringError = err.stringError || "error";
  res.status(code).json({ message: err.message, error: stringError });
};
