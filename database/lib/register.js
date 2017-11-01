var User = require('../models/Users');

function Register(data, cb){
	var user = new User();
		user.name = data.name;
		user.email = data.email;
		user.phone = data.phone;
		user.password = data.password;
		user.address = data.address;
		console.log("recieved");
		user.save(function(err, result){
			if(err){
				console.log(err);
				cb({"success": false, "msg": err.message});
			}else{
				cb({"success": true, "msg": "User is registered successfully."});
			}
		});
}

module.exports = Register;