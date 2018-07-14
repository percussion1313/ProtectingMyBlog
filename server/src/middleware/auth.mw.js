import passport from 'passport';

function tokenMiddleware(req, res, next) {
    passport.authenticate('bearer', { session: false })(req, res, next);
}

function isLoggedIn(req, res, next) {
    console.log('logged in')
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

export { tokenMiddleware, isLoggedIn };