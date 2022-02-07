// const express = require('express')
import express, { Application } from 'express';
import appRouter from './routes/app.route';
import logger from 'morgan';
import morgan from 'morgan';

const port: number = 3000;

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('tiny'));
app.use(logger('dev'));

app.use("/", appRouter);

app.listen(port, function (): void {
    console.log(`Server is up on localhost:${port}`)
});
