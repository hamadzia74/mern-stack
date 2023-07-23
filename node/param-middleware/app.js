const express = require('express');
const morgan = require('morgan');
const app = express();

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

//Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Creating Our Own MiddleWares
app.use((req, res, next) => {
    console.log('Hello from the middleware');
    next();
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

// Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;