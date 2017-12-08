var mongoose = require('mongoose'); // connect to our database using Mongoose middleware
mongoose.connect('mongodb://localhost/OurDB');

var fs = require('fs');
var path = require('path');

// video 16:29

var models_path = path.join(__dirname , '/../models');
fs.readdirSync(models_path).forEach(function(file) {
    if (file.indexOf('.js') > 0) {
        require(models_path + '/' + file);
    }
})

// go to the path. get all the models that are in our models folder
// create this variable models_path, go and get the directory name, go up a folder,
// then go into the models. from there, using fs, read the directory and for every file,
// that ends with .js, require it.
