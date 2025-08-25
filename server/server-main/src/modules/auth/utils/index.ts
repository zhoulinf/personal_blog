import bcrypt from 'bcrypt';

const hashPassword = async (password: string) => {
  const saltRound = 10;

  return bcrypt.hash(password, saltRound);
};

// 密码验证
const validatePassword = (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(plainPassword, hashedPassword);
};
export {hashPassword, validatePassword};
