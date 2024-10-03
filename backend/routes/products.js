const { Decimal128 } = require('mongodb');

const Router = require('express').Router;

const { getDb } = require('../db')

const router = Router();


// Get list of products products
router.get('/', async (req, res, next) => {
  const db = getDb().collection('products')

  const queryPage = req.query.page;
  const pageSize = 5;
  let resultProducts = await db.find().toArray();

  if (queryPage) {
    resultProducts = products.slice(
      (queryPage - 1) * pageSize,
      queryPage * pageSize
    );
  }
  res.json(resultProducts);
});

// Get single product
router.get('/:id', async (req, res, next) => {
  try {
    const db = getDb().collection('products')
    const product = await db.findOne({ _id: req.params.id })
    if (!product) {
      res.status(404).json({ message: 'There is no such product.' });
      return
    }
    res.status(200).json(product);

  } catch (error) {
    console.log("error", error)
    res.status(500).json({ message: "Something went wrong." })
  }
});

// Add new product
// Requires logged in user
router.post('', async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: new Decimal128(req.body.price.toString()), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };

  const db = getDb()
  const data = await db.collection('products').insertOne(newProduct)

  res.status(201).json({ message: 'Product added', productId: data.insertedId });
});

// Edit existing product
// Requires logged in user
router.patch('/:id', (req, res, next) => {
  const updatedProduct = {
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  console.log(updatedProduct);
  res.status(200).json({ message: 'Product updated', productId: 'DUMMY' });
});

// Delete a product
// Requires logged in user
router.delete('/:id', (req, res, next) => {
  res.status(200).json({ message: 'Product deleted' });
});

module.exports = router;
