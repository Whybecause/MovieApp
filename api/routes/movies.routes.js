const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies.controller');

router.post("/movie", controller.getMovie);
router.get("/sorted", controller.sortMovie);
router.get("/popular", controller.popularMovies);
router.get("/toprated", controller.topRatedMovies);
module.exports = router;