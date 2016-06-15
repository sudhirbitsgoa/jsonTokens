const verifyAuth = require('../controllers/auth');
const isAuthorized = require('../auth/auth');
const register = require('../controllers/register');

const userRoutes = function(app) {
    app.post('/api/v1/devices/register', (req, res, next) => {
				register(req, res, next);
    });

    app.post('/api/v1/devices/login', (req, res, next) => {
        verifyAuth.verifypassword(req, res)
    });

    app.get('/api/v1/devices/1/bootstrap_url', isAuthorized, (req, res, next) => {
        res.send('authorized');
    });
}

module.exports = userRoutes;
