
import CreateProductTag from "./productTag.js"
export const getProducts = async (req, res) => {
    try {
        const productTag = await CreateProductTag.find();

        console.log(productTag);

        res.status(200).json(productTag);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const createProduct = async (req, res) => {
   const productTag = req.body;
   if (!productTag.name) {
       return res.status(420).json({ message: "please enter the product name" });
    }
    else if (!productTag.price){
       
           return res.status(420).json({ message: "please enter the product price" });
       
    }
   const newProductTag = new CreateProductTag(productTag); 
   
    try {
        await newProductTag.save().then(data => {
            res.status(201).json(data);
        });

        

   } catch (error) {
        res.status(409).json({message: error.message});
   } 
}
