// Standard express setup
var express = require('express');
app = express();
path = require('path'); // not using, but if we had to go get files, we would
var bodyParser = require('body-parser'); // we could get information back and forth from our client side, which we aren't doing because it's just an API
var port = 6789;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./config/mongoose.js");
require("./config/routes.js")(app);
// var mongoose = require('mongoose'); // connect to our database using Mongoose middleware
// mongoose.connect('mongodb://localhost/OurDB'); // Mongoose connect, go to this particular collection, or this database called OurDB

// // basic models now in models folder

// // create a couple of collections...
// var userSchema = new mongoose.Schema({
//     name:{type:String},
//     age:{type:Number}
// }, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} });
// mongoose.model('user', userSchema); // this is what actually creates the collection

// var dojoSchema = new mongoose.Schema({
//     location: {type:String}
// }, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} });
// mongoose.model('dojo', dojoSchema); // creates the dojo collection

// basic controllers now in controllers folder

// creates these two variables User and Dojo, which are basically objects that conform to the schema user and dojo
// var User = mongoose.model('user');
// var Dojo = mongoose.model('dojo'); --> no longer needed because already in controllers/dojos.js

// an Object for doing stuff with users, result of requires!


// we then use these two objects for our usersController, which in itself is an object, that has a couple of methods in it
// one of those methods is index, one of those methods is create

var usersController = require('./controllers/users.js');
// var usersController = {
//     // two methods for now... you can imagine all the RESTful routes here, and more!
//     index: function(req, res){
//         var users = User.find({}, function (err, data) {
//             if (err) {
//                 res.json (err);
//                 return;
//             }
//             res.json(data);
//         });
//     },
//     create: function(req, res) {
//         var user = new User(req.body);
//         user.save(function (err, aUser) {
//             if (err) {
//                 res.json (err);
//                 return;
//             }
//             res.json(aUser);
//         });
//     }
// }

var dojosController = require('./controllers/dojos.js');
// var dojosController = {
//     index: function(req, res) {
//         var dojos = Dojo.find({}, function (err, data) {
//             if (err) {
//                 res.json (err);
//                 return;
//             }
//             res.json(data);
//         });
//     },
//     show: function(req,res) {
//         var dojos = Dojo.findOne({_id:req.params.id}, function (err, data) {
//             if (err) {
//                 res.json (err);
//                 return;
//             }
//             res.json(data);
//         });
//     },
//     create: function(req, res) {
//         var dojo = new Dojo(req.body);
//         dojo.save(function (err, data) {
//             if (err) {
//                 res.json (err);
//                 return;
//             }
//             res.json(data);
//         });
//     }
// }

// ***************** routes ***************************
// app.get('/', function(req, res) {
//     res.json({key: 'value'});
// })
// app.get('/users', usersController.index);
// app.post('/users', usersController.create);
// app.get('/dojos', dojosController.index);
// app.get('dojos/:id', dojosController.show);
// app.post('/dojos', dojosController.create);
// **************** END routes ************************

app.listen(port, function(){
    console.log(`listening on port ${port}`);
})
