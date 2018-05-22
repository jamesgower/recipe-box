const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientsSchema = new Schema({
	ingredient: String,
	quantity: {
		type: Number,
		default: 1
	},
	purchased: {
		type: Boolean,
		default: false
	}
});

mongoose.model('ingredients', ingredientsSchema);