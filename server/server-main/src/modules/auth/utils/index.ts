import bcrypt from 'bcrypt';

const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const hashed: string = await bcrypt.hash(password, saltRounds);
  return hashed;
};

const validatePassword = async (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  const isValid: boolean = await bcrypt.compare(plainPassword, hashedPassword);
  return isValid;
};

export {hashPassword, validatePassword};
