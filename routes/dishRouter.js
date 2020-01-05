const express = require('express');
const bodyParser = require('body-parser');

const dishRouter =express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
.get((req, res, next) => {
    res.end('Enviandote todos los pedidos');
})
.post((req, res, next) => {
    res.end('Deberia agregar este pedido ' + req.body.name +
    ' con la siguiente descripcion '+ req.body.description);
})
.put((req, res, next) => {
    res.statusCode=403;
    res.end('Operacion no soportada');
})
.delete((req, res, next) => {
    res.end('Eliminando todos los pedidos');
});


dishRouter.route('/:dishId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
.get((req, res, next) => {
    res.end('Enviandote el pedido ' + req.params.dishId);
})
.post((req, res, next) => {
    res.statusCode=403;
    res.end('Operacion no soportada ' + req.params.dishId);
})
.put((req, res, next) => {
    res.write('Actualizando el pedido ' + req.params.dishId + '\n');
    res.end('Actualizando el pedido ' + req.body.name +
    ' con la siguiente descripcion '+ req.body.description);
})
.delete((req, res, next) => {
    res.end('Eliminando el pedido ' + req.params.dishId);
});



module.exports=dishRouter;