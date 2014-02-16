var Todo = require('./models/todo');

module.exports = function(app){

    // api ----------------------------------------
    // get all todos
    app.get('/api/todos', function(req, res) {

        // Use mongoose to get all the todos in the db
        Todo.find(function(err, todos){

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(todos); // return all todos in JSON format
        });
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function(req, res){

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function(err, todo){
            if (err)
                res.send(err)

            // get and return all the todos after you create another
            Todo.find(function(err, todos){
                if (err)
                    res.send(err)
                res.json(todos);
            })
        })
    })

    app.delete('/api/todos/:todo_id', function(req, res){
        Todo.remove({
            _id: req.params.todo_id
        }, function(err, todo){
            if (err)
                res.send(err)

            // get and return all the todos after you create another
            Todo.find(function(err, todos){
                if (err)
                    res.send(err)
                res.json(todos);
            })
        })
    })



    // application ----------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./app/views/index.html'); //load the single view file (angular will handel the page changes)
    })

}



