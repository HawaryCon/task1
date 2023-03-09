

import CreatePT from "./pscheme.js";
export const getProducts = async (req, res) => {
    try {
        const pScheme = await CreatePT.find();

        console.log(pScheme);

        res.status(200).json(pScheme);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const createProduct = async (req, res) => {
   const pScheme = req.body;
   if (!pScheme.name) {
       return res.status(420).json({ message: "please enter the product name" });
    }
    else if (!pScheme.price){
       
           return res.status(420).json({ message: "please enter the product price" });
       
    }
   const newpScheme = new CreatePT(pScheme); 
   
    try {
        await newpScheme.save().then(data => {
            res.status(201).json(data);
        });

        

   } catch (error) {
        res.status(409).json({message: error.message});
   } 
}
