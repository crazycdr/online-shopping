var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
			name:{
				type: String
			},
			email:{
				type: String,
				unique: true,
				required: true
			},
			password:{
				type: String,
				required: true
			},
			phone:{
				type: Number,
				unique: true,
				required: true
			},
			address:{
				basic: String,
				district: String,
				state: String,
				country: String,
				pincode: Number
			}
		});
module.exports=mongoose.model('users',User);