import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productsRoutes from './productsR.js';
import { config } from 'dotenv';
import mongodb from 'mongodb';
import CreatePTii from './pscheme2.js';
config();



const app = express();
app.use(express.json()); // was missing
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/products', productsRoutes);

app.get("/", (req,res) => {
    return res.send("hello world");
})

app.delete("/:id", async (req,res) => {
    const {id} = req.params;
    console.log(id);
    const result = await CreatePTii.deleteOne({ _id: new mongodb.ObjectId(req.params.id)})
   
    res.status(!!result.deletedCount? 200:400).json(result);
    
})




const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URI , {useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server is running on port : ${PORT}`) ) )
    .catch((error) => console.log(error.message));

