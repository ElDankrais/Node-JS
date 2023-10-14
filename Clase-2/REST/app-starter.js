const express = require('express') // require -> commonJS
const crypto = require('node:crypto')
const cors = require('cors')

const movies = require('./movies.json')
const { validateMovie, validatePartialMovie } = require('./schemas/movies')

const app = express()
app.use(express.json())
app.use(cors({
    origin: (origin, callback) => {
        console.log(origin);
        const ACCEPTED_ORIGINS = [
            'http://localhost:8080',
            'http://localhost:1234',
            'http://localhost:5500',
            'http://127.0.0.1:5500'
        ]

        if (ACCEPTED_ORIGINS.includes(origin)) {
            console.log('yey');
            return callback(null, true);
        }

        if (!origin) {
            return callback(null, true);
        }

        return callback(new Error('Invalid origin'));
    }
}))

//Devolver las películas con /movies
app.get('/movies', (req, res) => {
    res.json(movies);
})

//Devolver películas en específico /movies/:id
app.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === id);
    if (movie) return res.json(movie);
    return res.status(404).json({message: 'Pailander'});
});

app.post('/movies/', (req, res) => {
    const result = validateMovie(req.body);
    
    if(!result.success) {
        return res.status(400).json({error: JSON.parse(result.error.message)});
    }

    // en base de datos
    const newMovie = {
        id: crypto.randomUUID(),
        ...result.data
    }

    movies.push(newMovie);

    res.status(201).json(newMovie);
})

//Editar una propiedad en específico

app.patch('/movies/:id', (req, res) => {
    const result = validatePartialMovie(req.body);

    if(!result.success) {
        return res.status(400).json({error: JSON.parse(result.error.message)});
    }

    const { id } = req.params;

    const movieIndex = movies.findIndex(movie => movie.id === id);
    
    //NO LO ENCONTRÓ
    if(movieIndex === -1) {
        return res.status(404).json({message: 'Tu película no está'});
    }

    const updatedMovie = {
        ...movies[movieIndex],
        ...result.data
    }

    movies[movieIndex] = updatedMovie;

    return res.json(updatedMovie);
});


app.delete('/movies/:id', (req, res) => {
    const { id } = req.params;

    const movieIndex = movies.findIndex(movie => movie.id === id);
    
    //NO LO ENCONTRÓ
    if(movieIndex === -1) {
        return res.status(404).json({message: 'Tu película no está'});
    }

    movies.splice(movieIndex, 1);

    return res.json({message: 'Se murióooooo'});
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})