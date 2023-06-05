const express = require('express');
// const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler} = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// const whitelist = ['http://localhost:8080', 'http://localhost:3000', 'http://myapp.co']
// const options = {
//   origin: (origin, callback) => {
//     if( whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('no permitido cj'))
//     }
//   }
// }

// app.use(cors(options));

app.get('/api', (req, res) => {
  res.send('Hola mi server en express')
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json(
//     {
//       categoryId,
//       productId
//   })
// });


app.listen(port, () => {
  console.log('Mi port' + port)
});
