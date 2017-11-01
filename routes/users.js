var express = require('express');
var router = express.Router();
var db = require('../database/index');

// /users
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
	var form = req.body;
	var data={
		name: form.u_name,
		email: form.email,
		password: form.password,
		phone: form.phone,
		address: {
			base: form.baseAddress,
			district: form.district,
			state: form.state,
			country: form.country,
			pincode: form.pincode
		}
	};
	console.log(data);
	db.register(data, function(resp){
		console.log('register done');
		if(resp.success){
			res.redirect('/login');
		}else{
			res.redirect('/sign_up');
		}
	});
});

router.post('/login', function(req, res, next) {
	var data={
		email: req.body.email,
		password: req.body.password
	};
	console.log(data);
	db.login(data, function(resp){
		if(resp.success){
			console.log('login success.');
			req.session.email = data.email;
			res.redirect(req.session.prevUrl);
		}else{
			res.redirect('/');
		}
	});
});

router.post('/review', function(req, res, next){
	console.log(req.body);
	if(req.session.email){
		db.getUser({email: req.session.email}, function(result){
			if(result.success){
				db.review(req.body.itemID, {
					userId: result.user._id,
					userName: result.user.name,
					rating: req.body.rating,
					description: req.body.desc
				}, function(result){
					if(result.success){
						res.json({"success": true});
					}else{
						res.json({"success": false});
					}
				});
			}
		});
	}else{
		res.json({"success": false, "msg": "user not found"});
	}
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/');
});


module.exports = router;
