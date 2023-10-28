const express = require('express');

const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Pokemon = require('./models/pokemon');

mongoose.connect('mongodb://127.0.0.1:27017/pokemonShelter')
.then(() => {
        console.log('CONECTADOS AGAIN');
    })
    .catch((err) => {
        console.log("oh no un error");
        console.log(err);
    })

app.use(express.json());
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


app.get('/pokemon', async (req, res) => {
    const pokemons = await Pokemon.find({});
    res.send(pokemons);
});

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})