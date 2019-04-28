const express = require("express");
const app = express();
const session = require('express-session');

app.set('trust proxy', 1);
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use(function (req, res, next) {
    if (!req.session.data) {
        req.session.data = {}
    }
    req.session.data.isLogin = 3;
    next()
})

app.get("/data", (req, res, next) => {
    const { data } = req.session
    res.json(data);
})

app.listen(3500, () => console.log("work"))

