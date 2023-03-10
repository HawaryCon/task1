import  express  from 'express';
import { getProducts, createProduct, updateProduct  } from './productsC.js';
const router = express.Router();
router.get('/' , getProducts );
router.post('/create' , createProduct );
router.patch('/update' ,updateProduct );
export default router;