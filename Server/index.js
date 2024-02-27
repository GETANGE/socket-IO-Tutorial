import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

const app = express();
dotenv.config({path: 'config.env'});

if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
