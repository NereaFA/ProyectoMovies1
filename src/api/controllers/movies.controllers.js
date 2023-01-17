const Movie = require('../models/movies.model');

const  getAllMovies = async(req, res) => { //Get para todas las peliculas
    try {
        const myMovies = await Movie.find();
        return res.status(200).json(myMovies)
    } catch (error) {
        return res.status(500).json(error);
    }

}

const  getOneMovie = async(req, res) => { //Get para pelicula por id
    try {
        const {id} = req.params;
        const myMovie = await Movie.findById(id);
        return res.status(200).json(myMovie)
    } catch (error) {
        return res.status(500).json(error);
    }

};

const  getTitleMovie = async(req, res) => { //Get para pelicula por titulo
    try {
        const {title} = req.params;
        //console.log(title);
        const myTitle = await Movie.find({"title": title}); //{$regex: RegExp(title)}});//.myTitle(); //{title: title})->tiene que ser exacto 
        //console.log(myTitle);
        return res.status(200).json(myTitle);
    } catch (error) {
        return res.status(500).json(error);
    }

};
//var stream = collection.find({"FirstName": new RegExp(val)}).stream();
//{"title": {$regex: request.query.val}}
// const regex=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// return regex.test(String(email).toLowerCase());
const  getGenreMovie = async(req, res) => { //Get para pelicula por genero
    try {
        const {genre} = req.params;
        //console.log(year);
        const myGenre = await Movie.find({"genre": genre});
       //console.log(myTitle);
        return res.status(200).json(myGenre);
    } catch (error) {
        return res.status(500).json(error);
    }

};

const  getYearMovie = async(req, res) => { //Get para pelicula por año
    try {
        const {year} = req.params;
        //console.log(year);
        const myYear = await Movie.find({"year": year}); //Hay que ponerle un if para que sea posterior al 2010
       //console.log(myTitle);
        return res.status(200).json(myYear);
    } catch (error) {
        return res.status(500).json(error);
    }

};


module.exports = {getAllMovies, getOneMovie, getTitleMovie, getGenreMovie, getYearMovie};