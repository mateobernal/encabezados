const { Router } = require('express');
const userRoute = Router();

const { home } = require ('../controllers/controllers')

userRoute.get('/', home);


module.exports = userRoute;