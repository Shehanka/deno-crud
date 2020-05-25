import { Router } from 'http://deno.land/x/oak/mod.ts';
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.ts';

const router = new Router();

router
  .get('/api/v1/products', getProducts)
  .get('/api/v1/product/:id', getProduct)
  .post('/api/v1/product', addProduct)
  .put('/api/v1/product/:id', updateProduct)
  .delete('/api/v1/product/:id', deleteProduct);

export default router;
