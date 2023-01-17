const mongoose = require('mongoose');
const dotenv = require('dotenv'); //
dotenv.config(); //
const Movie = require('../api/models/movies.model');
const DB_URL = process.env.DB_URL; //

const peliculas = [
    {
      "title": "The Matrix",
      "director": "Hermanas Wachowski",
      "year": 1999,
      "genre": "Acción",
    },
    {
      "title": "The Matrix Reloaded",
      "director": "Hermanas Wachowski",
      "year": 2003,
      "genre": "Acción",
    },
    {
      "title": "Buscando a Nemo",
      "director": "Andrew Stanton",
      "year": 2003,
      "genre": "Animación",
    },
    {
      "title": "Buscando a Dory",
      "director": "Andrew Stanton",
      "year": 2016,
      "genre": "Animación",
    },
    {
      "title": "Interestelar",
      "director": "Christopher Nolan",
      "year": 2014,
      "genre": "Ciencia ficción",
    },
    {
      "title": "50 primeras citas",
      "director": "Peter Segal",
      "year": 2004,
      "genre": "Comedia romántica",
    },
  ]

  mongoose.set("strictQuery", false);

mongoose.connect(DB_URL,{ //Ponemos DB_URL en lugar de la url de la BD
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allMovies = await Movie.find();
    if(allMovies.length > 0) {
        await Movie.collection.drop();
        console.log('peliculas borradas');
    }
}).catch((error) => console.log("error borrando peliculas", error))
.then(async () => {
    const movieMap = peliculas.map((pelicula) => new Movie(pelicula));
    await Movie.insertMany(movieMap);
    console.log("peliculas insertadas")
})
.catch((error) => console.log("error insertando peliculas", error))
.finally(() => mongoose.disconnect());