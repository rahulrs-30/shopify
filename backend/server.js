import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
const port=process.env.PORT;


connectDB(); //Connect to MongoDB

const app = express();

app.get('/', (req,res) => {
    res.send('API is running...');
});
//Product routes
app.use('/api/products', productRoutes);

//Error handling middleware 404 and other errors
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server running on port ${port}`));