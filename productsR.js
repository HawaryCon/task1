import  express  from 'express';
import { getProducts, createProduct, updateProduct , deleteProduct } from './productsC.js';
const router = express.Router();
router.get('/' , getProducts );
router.post('/create' , createProduct );
router.patch('/update' ,updateProduct );
router.delete('/delete' ,deleteProduct );
export default router;