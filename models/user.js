var mongoose = require('mongoose'); // connect to our database using Mongoose middleware

// basic models
// create a couple of collections...
var userSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number}
}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} });
mongoose.model('user', userSchema); // this is what actually creates the collection
