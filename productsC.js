
import mongodb from 'mongodb';
import CreatePTii from "./pscheme2.js";
export const getProducts = async (req, res) => {
    try {
        const pScheme = await CreatePTii.find();

        console.log(pScheme);

        res.status(200).json(pScheme);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const createProduct = async (req, res) => {
   const pScheme = req.body;
   if (!pScheme.name) {
       return res.status(400).json({ message: "please enter the product name" });
    }
    else if (!pScheme.price){
       
       return res.status(400).json({ message: "please enter the price" });
       
    }
   const newpScheme = new CreatePTii(pScheme); 
   
    try {
        await newpScheme.save().then(data => {
            res.status(201).json(data);
        });

        

   } catch (error) {
        return res.status(420).json({ message: "error" });

   } 
}

export const updateProduct = async (req, res) => {
    try {       
        const {id} = req.body;
        const { price, name, image, description , SKU} = req.body;
       
        let result = await CreatePTii.findByIdAndUpdate(
            { _id: new mongodb.ObjectId(id) } , 
            { price, name, image, description, SKU }
            )
        res.status(201).json(result);
        
        // res.status(200).json({message: 'updated successfulyy'});
        
        
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
