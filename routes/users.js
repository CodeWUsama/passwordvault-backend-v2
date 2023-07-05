import express from 'express';

import handleSignup from '../controllers/registration.js';
import handleSignin from '../controllers/auth.js';
import tryCatchWrapper from '../helpers/tryCatchHelper.js';

const router = express.Router();

router.post('/signup', tryCatchWrapper(handleSignup));
router.post('/login', tryCatchWrapper(handleSignin));

export default router;
