var Item = require('../models/Items');
var mongoose = require('mongoose');

function review(itemId, rev, cb){
	Item.update({
		_id: new mongoose.Types.ObjectId(itemId)
	}, 
	{
		$push: {
			reviews: {
				userId: rev.userId,
				userName: rev.userName,
				description: rev.description,
				rating: rev.rating
			}
		}
	}, function(err,result){
		if(err){
			console.log(err);
			cb({success: false,msg: err.message});
		}else{
			if(result.nModified>0){
				cb({success: true});
			}else{
				cb({success: false, msg: "Item not found."});
			}
		}
	});
}

module.exports = review;