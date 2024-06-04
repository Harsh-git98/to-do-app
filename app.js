const express = require('express');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

// Setting up the template engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// Fire controllers
const todoController = require('./controllers/todoController');
todoController(app);

// Listen to port
app.listen(3000, () => {
    console.log('Listening to port 3000');
});
