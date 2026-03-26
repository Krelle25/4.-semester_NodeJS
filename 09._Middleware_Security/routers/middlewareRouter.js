import { Router } from "express";

const router = Router();

export default router;

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

router.use('/room', ipLogger);

function butler(req, res, next) {
    console.log('Welcome to the mansion...');
    next();
}

function takeCoat(req, res, next) {
    req.coatOff = true;
    next();
}

// middleware functions start with "is" - which means = isAuthenticated, isAdmin and so on...

router.get('/room', butler, takeCoat, (req, res, next) => {
    // res.send({ data: 'Welcome to room 1' });
    console.log('You are in room 1', req.coatOff);
    next();
});

        // inline middleware
router.get('/room', (req, res, next) => {
    console.log('This is the inline middleware"')
    next();
}, (req, res) => {
    res.send({ data: 'Welcome to room 2' });
});