const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies.controller');

router.post("/movie", controller.getMovie);

module.exports = router;