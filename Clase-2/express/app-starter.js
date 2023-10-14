const express = require('express');
const bodyParser = require('body-parser');
const path = require('node:path');

const adminRoutes = require('./routes/admin');
const messageRoutes = require('./routes/message');

const PORT = process.env.PORT || 1234;

const app = express();

app.use(bodyParser.urlencoded());

app.use('/admin', adminRoutes);
app.use(messageRoutes);

//path variable
app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    const subreddit = req.params.subreddit;
    res.send(`<h1>${subreddit}</h1>`);
})

//query params

app.get('/search', (req, res) => {
    const {id} = req.query;
    res.send(`<h1>${id}</h1>`);
});

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,  'web', 'index.html'));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname,  'web', '404.html'));
});



app.listen(PORT, () => {
    console.log('listening on port: ' + PORT);

});