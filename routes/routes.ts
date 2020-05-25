import { Router } from 'http://deno.land/x/oak/mod.ts';
import { getProducts } from '../controllers/product.controller.ts';

const router = new Router();

router.get('/api/v1/products', getProducts);

export default router;
