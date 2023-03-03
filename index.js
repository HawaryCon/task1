import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productsRoutes from './routes/products.js';
import { config } from 'dotenv';
config();



const app = express();
app.use(express.json()); // was missing
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/products', productsRoutes);




const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URI , {useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server is running on port : ${PORT}`) ) )
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', true);  --not working for some reason