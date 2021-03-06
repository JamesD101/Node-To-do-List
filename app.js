var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//setup template engine
app.set('view engine', 'ejs');

//static file
app.use(express.static('./public'));

//fire controllers
todoController(app);
//listen to port

app.listen(8080);
console.log("you are listening to port 8080");
