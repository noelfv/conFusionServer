const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter =express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
.get((req, res, next) => {
    res.end('Enviandote todos los lideres');
})
.post((req, res, next) => {
    res.end('Deberia agregar el lider ' + req.body.name +
    ' con la siguiente descripcion '+ req.body.description);
})
.put((req, res, next) => {
    res.statusCode=403;
    res.end('Operacion no soportada /leaders');
})
.delete((req, res, next) => {
    res.end('Eliminando todos los lideres');
});


leaderRouter.route('/:leaderId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
.get((req, res, next) => {
    res.end('Enviandote el lider ' + req.params.leaderId);
})
.post((req, res, next) => {
    res.statusCode=403;
    res.end('Operacion no soportada /leaders/' + req.params.leaderId);
})
.put((req, res, next) => {
    res.write('Actualizando la lider ' + req.params.leaderId + '\n');
    res.end('Actualizando la lider ' + req.body.name +
    ' con la siguiente descripcion '+ req.body.description);
})
.delete((req, res, next) => {
    res.end('Eliminando el lider ' + req.params.leaderId);
});



module.exports=leaderRouter;