const verifyAuth = require('../controllers/auth');
const isAuthorized = require('../auth/auth');

const userRoutes = function (app) {
	app.post('/api/v1/devices/register', (req, res, next) => {
		console.log('start registration process');
	});

	app.post('/api/v1/devices/login', (req, res, next) => {
		verifyAuth.verifypassword(req, res)
	});

	app.get('/api/v1/devices/1/bootstrap_url', isAuthorized, (req, res, next) => {
		res.send('authorized');
	});
}

module.exports = userRoutes;