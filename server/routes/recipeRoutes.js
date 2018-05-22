const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Recipe = mongoose.model('recipes');

module.exports = app => {
    app.get('/api/recipes', requireLogin, async(req, res) => {
        const recipes = await Recipe.find({_user: req.user.id});
        res.send(recipes);
    });

    app.delete('/api/recipes/delete/:id', async(req, res) => {
        await Recipe.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                return res.send(err);
            }
            return res.json({message: 'Deleted!'});
        });
    });

    app.post('/api/recipes', requireLogin, async(req, res) => {
        const { name, ingredients } = req.body;
        const recipe = new Recipe({
            name,
            ingredients,
            _user: req.user.id,
            dateCreated: Date.now(),
        });

        try {
            await recipe.save();
        } catch(e) {
            res.status(422).send(e);
        }
    });
};