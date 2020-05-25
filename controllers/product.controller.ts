import { Product } from '../types/product.ts';

let products: Product[] = [
  {
    id: 'I001',
    name: 'Milk',
    description: ' Dairy Milk',
    price: 200,
  },
  {
    id: 'I002',
    name: 'Eggs',
    description: ' Red Eggs',
    price: 20,
  },
];

// @desc Get All Products
// @route GET /api/v1/products
const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

export { getProducts };
