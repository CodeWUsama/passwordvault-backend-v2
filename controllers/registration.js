import { Op } from 'sequelize';
import sendResponse from '../helpers/responseHelper.js';
import User from '../models/users.js';
import { userRegistrationSchema } from '../schemas/users.js';

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
  await User.create({ fullname, email, password });
  sendResponse(res);
};

export default handleSignup;
