import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import cors from 'cors'
import { port, mongoUrl } from '../process/config.js'

const app = express();
const PORT = port || 8080;

const connection = mongoose.connect(mongoUrl)

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
