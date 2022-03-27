const { Router } = require('express');
const ProductsApi = require('../api/products.js');

const router = Router();
const productsApi = new ProductsApi();

router.get('/', (req, res) => {
  res.send(productsApi.getAll());
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(productsApi.getById(id));
});

router.post('/', (req, res) => {
  res.send(productsApi.createProduct(req.body));
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.send(productsApi.updateProduct(req.body, id));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(productsApi.deleteProduct(id));
});

module.exports = router;