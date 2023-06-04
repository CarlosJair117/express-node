const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server')
});

app.get('/products', (req, res) => {
  res.json([
    {
    name: 'Product',
    price: 1000
  }
])
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    {
    id,
    name: 'Product',
    price: 1000
  })
});



app.listen(port, () => {
  console.log('Mi port' + port)
});
