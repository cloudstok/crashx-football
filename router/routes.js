const routes = require('express').Router()

routes.get('/', async (req, res) => {
    res.send({ status: true, "msg": "CrashX Football Edition is up and running" });
});


module.exports = { routes }