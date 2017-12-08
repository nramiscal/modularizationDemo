var mongoose = require('mongoose'); // connect to our database using Mongoose middleware

var dojoSchema = new mongoose.Schema({
    location: {type:String}
}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} });
mongoose.model('dojo', dojoSchema); // creates the dojo collection
