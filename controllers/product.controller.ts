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
// @route GET /api/v1/products/:id
const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

// @desc Get single Product
// @route GET /api/v1/product
const getProduct = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const product: Product | undefined = products.find(
    (product) => product.id === params.id
  );

  if (product) {
    response.status = 200;
    response.body = { success: true, data: product };
  } else {
    response.status = 404;
    response.body = { success: false, message: 'No product found' };
  }

  response.body = {};
};

// @desc Add Product
// @route POST /api/v1/product
const addProduct = ({ response }: { response: any }) => {};

// @desc update Product
// @route PUT /api/v1/product/:id
const updateProduct = ({ response }: { response: any }) => {};

// @desc delete Product
// @route DELETE /api/v1/product/:id
const deleteProduct = ({ response }: { response: any }) => {};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
