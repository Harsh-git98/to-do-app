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
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Listening to port ${PORT}');
});
