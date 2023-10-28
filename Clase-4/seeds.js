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

// const charmander = new Pokemon({
//     name: 'Chamnander',
//     level: 15,
//     personality: {
//         value: 'Timid',
//         pokemonFriendly: true
//     },
//     attack: 30,
//     defense: 20,
//     type: ['fire']
// });

// charmander.save(p => {
//     console.log(p);
// })

Pokemon.insertMany([
        {
         name: 'Carvanha',
         level: 15,
         personality: {
           value: 'Lonely',
           pokemonFriendly: false
         },
         attack: 50,
         defense: 50,
         type: ['water', 'dark']
        },
        {
         name: 'Cubone',
         level: 22,
         personality: {
           value: 'Careful',
           pokemonFriendly: false
         },
         attack: 50,
         defense: 50,
         type: ['earth']
        },
        {
         name: 'Arceus',
         level: 70,
         personality: {
           value: 'Gentle',
           pokemonFriendly: true
         },
         attack: 200,
         defense: 200,
         type: ['normal']
        },
        {
         name: 'Vulpix',
         level: 13,
         personality: {
           value: 'Timid',
           pokemonFriendly: false
         },
         attack: 70,
         defense: 30,
         type: ['fire']
        },
        {
         name: 'Togepi',
         level: 5,
         personality: {
           value: 'Jolly',
           pokemonFriendly: true
         },
         attack: 20,
         defense: 7,
         type: ['normal']
        },
        {
         name: 'Togepi',
         level: 6,
         personality: {
           value: 'Jolly',
           pokemonFriendly: true
         },
         attack: 20,
         defense: 7,
         type: ['normal']
        },
        {
         name: 'Pichu',
         level: 5,
         personality: {
           value: 'Jolly',
           pokemonFriendly: true
         },
         attack: 20,
         defense: 7,
         type: ['electric']
        }
])
    .then(data => {
        console.log('SIIIIIIIUUUUUU')
        console.log(data);
    })