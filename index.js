
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productsRoutes = require('./productsR.js');
const { config } = require('dotenv');
const cookieParser = require("cookie-parser");
config();



const app = express();
app.use(cookieParser());
app.use(express.json()); // was missing
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/products', productsRoutes);






const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URI , {useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server is running on port : ${PORT}`) ) )
    .catch((error) => console.log(error.message));

