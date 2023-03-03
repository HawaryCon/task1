import  express  from 'express';
import { getProducts , createProduct } from '../controllers/products.js';
const router = express.Router();
router.get('/' , getProducts );
router.post('/create' , createProduct );
export default router;