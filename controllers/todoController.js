var bodyParser = require('body-parser');

// Middleware for parsing URL-encoded data
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Sample data
var data = [{ item: 'Conquer All' }, { item: 'Never Stop Dreaming' }, { item: 'Embrace the Journey' }];

module.exports = function(app) {
    
    
    app.get('/todo', function(req, res) {
        res.render('todo', { todos: data });
    });

  
    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body);
        res.json(data);
    });

   
    app.delete('/todo/:item', function(req, res) {
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });
    app.get('/*',function(req,res){
        res.redirect('/todo');
    })
};
