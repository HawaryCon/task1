import mongoose from "mongoose";

const pScheme = mongoose.Schema(
    {
        name: String,
        price: Number,
        image: String,
        description: String , 
        SKU : {
            type : Number,
            unique : true
        }

    }
)


const CreatePT = mongoose.model('CreatePT', pScheme);


export default CreatePT;