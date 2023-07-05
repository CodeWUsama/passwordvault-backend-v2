import jwt from 'jsonwebtoken';
import { compareData } from '../helpers/encryptionHelpers.js';
import sendResponse from '../helpers/responseHelper.js';
import User from '../models/users.js';
import { userAuthSchema } from '../schemas/users.js';

const handleSignin = async (req, res) => {
  await userAuthSchema.validate(req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    const isPasswordValid = compareData(password, user.password);
    if (isPasswordValid) {
      const token = jwt.sign({ user: user.id }, process.env.JWT_KEY);
      return sendResponse(res, token);
    }
  }
  return sendResponse(res, null, 'Invalid email or password');
};

export default handleSignin;
