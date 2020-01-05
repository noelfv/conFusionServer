const express = require('express');
const bodyParser = require('body-parser');

const promoRouter =express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
.get((req, res, next) => {
    res.end('Enviandote todos los pomociones');
})
.post((req, res, next) => {
    res.end('Deberia agregar esta promocion ' + req.body.name +
    ' con la siguiente descripcion '+ req.body.description);
})
.put((req, res, next) => {
    res.statusCode=403;
    res.end('Operacion no soportada /promotions');
})
.delete((req, res, next) => {
    res.end('Eliminando todas las promociones');
});


promoRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
.get((req, res, next) => {
    res.end('Enviandote la promocion ' + req.params.promoId);
})
.post((req, res, next) => {
    res.statusCode=403;
    res.end('Operacion no soportada /promotions/' + req.params.promoId);
})
.put((req, res, next) => {
    res.write('Actualizando la promocion ' + req.params.promoId + '\n');
    res.end('Actualizando la promocion ' + req.body.name +
    ' con la siguiente descripcion '+ req.body.description);
})
.delete((req, res, next) => {
    res.end('Eliminando la promocion ' + req.params.promoId);
});



module.exports=promoRouter;