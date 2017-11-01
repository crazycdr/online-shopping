var Item = require('../models/Items');
var ObjectId = require('mongoose').Types.ObjectId;

function FindItem(id,cb){
	Item.find({_id: ObjectId(id)}, function(err,docs){
		if(err){
			cb({success: false});
		}else{
			cb({success: true, item: docs[0]});
		}
	});
}

module.exports = FindItem;