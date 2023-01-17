const express = require('express');
const {getAllMovies, getOneMovie, getTitleMovie, getGenreMovie, getYearMovie} = require('../controllers/movies.controllers');

const router = express.Router();


router.get('/',  getAllMovies);
router.get('/:id',  getOneMovie);
router.get('/title/:title', getTitleMovie);
router.get('/genre/:genre', getGenreMovie);
router.get('/year/:year', getYearMovie);


module.exports = router;