var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var item = new Schema({
			name:{
				type: String
			},
			price:{
				type: Number
			},
			photoSmall:{
				type: String
			},
			photoZoom:{
				type: String
			},
			offers: [String],
			locations: [Number],
			features: [String],
			services: [String],
			seller: {
				type: String
			},
			rating: {
				type: Number
			},
			reviews: [
				{
					userId: Schema.Types.ObjectId,
					userName: String,
					description: String,
					rating: Number
				}
			]
		});
module.exports=mongoose.model('items',item);