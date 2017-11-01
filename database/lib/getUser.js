var User = require('../models/Users');

function getUser(data, cb){
	User.find(data, function(err,docs){
		if(err){
			console.log(err);
			cb({success: false,msg: err.message});
		}else{
			if(docs.length===1){
				cb({success: true, user: docs[0]});
			}else{
				cb({success: false, msg: "User not found."});
			}
		}
	});
}

module.exports = getUser;