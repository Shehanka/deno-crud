import { Router } from 'http://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/api/v1/product', ({ response }: { response: any }) => {
  response.body = 'Hello Deno';
});

export default router;
