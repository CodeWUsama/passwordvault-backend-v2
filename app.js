import express from 'express';

import path, { dirname } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { fileURLToPath } from 'url';
import cors from 'cors';
import 'dotenv/config';
import generalRouter from './routes/general.js';

const filename = fileURLToPath(import.meta.url);
const dirnameConst = dirname(filename);

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(dirnameConst, 'public')));

app.use('/', generalRouter);

export default app;
