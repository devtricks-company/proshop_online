import express from 'express';

import colors from 'colors';
import dotenv from 'dotenv';
import {connectDB} from './db/db.js';
import { notFound,erroHandlerException } from './middlewares/errorHandler.js'
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'


dotenv.config();


//connect to db
connectDB();


const app = express();
app.use(express.json())


app.get('/', (req,res) => {
    res.send('Api is running.....!');
});

app.use('/api/products',productRoutes);
app.use('/api/user',userRoutes);

app.use(notFound);
app.use(erroHandlerException);


const PORT = process.env.PORT
app.listen(PORT,() => console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold));