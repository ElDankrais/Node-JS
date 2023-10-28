const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'Unknown'
    },
    level: Number,
    personality: {
        value: String,
        pokemonFriendly: Boolean
    },
    attack: Number,
    defense: Number,
    type: [String],
    favoriteBerries: {
        type: String,
        default: 'Green',
        enum: ['Blue', 'Green', 'Yellow', 'White']
    }
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;