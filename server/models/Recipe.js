const mongoose = require('mongoose');
const {Schema} = mongoose;
const IngredientsSchema = require('./Ingredients');

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [IngredientsSchema],
    dateCreated: {
        type: Date,
        required: true,
    },
    lastUpdated: Date,
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
mongoose.model('recipes', recipeSchema);