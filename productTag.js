import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name: String   ,
        price: Number ,
        image: String ,
        description: String
    }
)
const CreateProductTag = mongoose.model('CreateProductTag', productSchema);
export default CreateProductTag;