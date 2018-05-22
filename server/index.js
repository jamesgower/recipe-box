const bodyParser = require('body-parser');
const express = require('express');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const passport = require('passport');

require('./models/User');
require('./models/Recipe');
require('./models/Ingredients');
require('./services/googlePassport');
require('./services/facebookPassport');
require('./services/githubPassport');
require('./services/twitterPassport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(cookieSession({
	maxAge: 30 * 24 * 60 * 60 * 1000,
	keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/recipeRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build')); //express serves production assets
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); //express serves index.html if it doesn't recognize route
	});
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is up at port ${port}`);
});