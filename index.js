const express = require('express');
const server = express();
const port = 8080;

const logger = require('./middleware/logger');
const notFound404 = require('./middleware/404NotFound');
const errorHandler = require('./middleware/errorHandler');


//routes 
const router = require('./routes/users');

server.use('/users', router);


server.use(logger);

server.get('/', (req, res) => {
  res.send("<h1>It's alive!</h1>");
});

server.get('/hi', (req, res) => {
  res.send("It's a hi!");
});

server.get('/error', (req, res, next) => {
  const mockErr = {
    status: 501,
    message: "Error to connect to DB"
  }
  next(mockErr);
});

server.use(notFound404);
server.use(errorHandler);

server.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});