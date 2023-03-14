import mongoose from "mongoose";

const pSchemeii = mongoose.Schema(
    {
        name: String,
        price: [{   
                value : Number,
                size : String,
                currency : String
        }],
        image: String,
        description: String,
        SKU: {
            type: Number,
            unique: true
        }

    }
)


const CreatePTii = mongoose.model('CreatePTii', pSchemeii);


export default CreatePTii;