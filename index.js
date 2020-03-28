// const ml = require('./routes/machine-learning');
// const home = require('./routes/home');
// const express = require('express');
// const app = express();

// // if there is json in the data, it will create req.body
// app.use(express.json());
// app.use(express.urlencoded({extended: true})); // key=value&key=value



// app.use('/api/', home);
// app.use('/api/ml', ml);






// // PORT  use "export PORT=5000" in terminal to set environment variable PORT to 5000
// const port = process.env.PORT || 3000;

// app.listen(port, () => console.log(`Listening on port ${port}...`));



const ml = require('./routes/machine-learning');
const home = require('./routes/home');
var express = require('express');
const app = express();

// if there is json in the data, it will create req.body
app.use(express.json());
app.use(express.urlencoded({
    extended: true
})); // key=value&key=value


app.use('/EatWhere/', home);
app.use('/EatWhere/ML', ml);


const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));
