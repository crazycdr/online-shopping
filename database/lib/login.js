var User = require('../models/Users');

function Login(data, cb){
	User.find({email: data.email, password: data.password}, function(err,docs){
		if(err){
			console.log(err);
			cb({success: false,msg: err.message});
		}else{
			if(docs.length===1){
				cb({success: true, msg: "User found successfully"});
			}else{
				cb({success: false, msg: "User not found."});
			}
		}
	});
}

module.exports = Login;