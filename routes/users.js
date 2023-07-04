import express from 'express';

import handleSignup from '../controllers/registration.js';
import tryCatchWrapper from '../helpers/tryCatchHelper.js';

const router = express.Router();

router.post('/signup', tryCatchWrapper(handleSignup));

export default router;
