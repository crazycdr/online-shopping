var User = require('../models/Users');
var mongoose = require('mongoose');

function getUserName(id, cb){
	User.find({_id: new mongoose.Types.ObjectId(id)}, {name: 1}, function(err,docs){
		if(err){
			console.log(err);
			cb({success: false,msg: err.message});
		}else{
			if(docs.length===1){
				cb({success: true, usrName: docs[0].name});
			}else{
				cb({success: false, msg: "User not found."});
			}
		}
	});
}

module.exports = getUserName;