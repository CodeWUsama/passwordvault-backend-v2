import { Op } from 'sequelize';
import sendResponse from '../helpers/responseHelper.js';
import User from '../models/users.js';
import { userRegistrationSchema } from '../schemas/users.js';
import { encryptData } from '../helpers/encryptionHelpers.js';

const handleSignup = async (req, res) => {
  await userRegistrationSchema.validate(req.body);
  const { fullname, email, password } = req.body;
  const user = await User.findOne({
    where: {
      email: {
        [Op.iLike]: email,
      },
    },
  });
  if (user) {
    return sendResponse(res, null, 'User already exists');
  }
  const encryptedPassword = encryptData(password);
  await User.create({ fullname, email, password: encryptedPassword });
  sendResponse(res);
};

export default handleSignup;
