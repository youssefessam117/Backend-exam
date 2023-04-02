import bcrypt from "bcrypt";

export const hashPassword = (
  password,
  saltround = parseInt(process.env.saltround)
) => {
  const hash = bcrypt.hashSync(password, saltround);
  return hash;
};

export const checkedPassword = (password, hash) => {
  const isTrue = bcrypt.compareSync(password, hash);
  return isTrue;
};
