const express = require('express');
const bodyParser = require('body-parser');
const path = require('node:path');

const adminRoutes = require('./routes/admin');
const messageRoutes = require('./routes/message');

//run a server

const PORT = process.env.PORT ?? 1234

const app = express();

// Pequeñas partes de código para manejar peticiones

app.use(bodyParser.urlencoded());

app.use('/admin', adminRoutes);
app.use(messageRoutes);

//console.dir(app);

// app.use((req, res) => {
//     console.log("I'm listening");
//     // const url = req.url;
//     // const method = req.method;
//     // if (url === '/') {
//     //     res.write('<html>');
//     //     res.write('<head><title>Enter Message</title><head>');
//     //     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//     //     res.write('</html>');
//     //     return res.send();
//     // }
//     // if (url === '/message' && method === 'POST') {
//     //     const body = [];
//     //     req.on('data', (chunk) => {
//     //         console.log(chunk);
//     //         body.push(chunk);
//     //     });
//     //     return req.on('end', () => {
//     //     const parsedBody = Buffer.concat(body).toString();
//     //     const message = parsedBody.split('=')[1];
//     //     console.log(parsedBody, message);
//     //     fs.writeFile('message.txt', message, (err) => {
//     //         res.statusCode = 302;
//     //         res.setHeader('Location', '/');
//     //         return res.send();
//     //     });
//     //     });
//     // }
//     // res.setHeader('Content-Type', 'text/html');
//     // res.write('<html>');
//     // res.write('<head><title>My First Page</title><head>');
//     // res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//     // res.write('</html>');
//     // res.send();
// });

//routing

app.get('/', (req, res) => {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.send();
});

app.post('/message', (req, res) => {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(parsedBody, message);
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.send();
            });
        });
})

//path variable

app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    const subreddit = req.params.subreddit
    res.send(`<h1>Mostrando la página de ${req.params.subreddit}</h1>`);
});

//query params / query strings

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>Mostrando la resultados de ${q}</h1>`);
});

// app.post('/message', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

// app.use((req, res, next) => {
//     res.status(404).send('<h1>Error en la página</h1>');
// })

// app.use('/', (req, res, next) => {
//     console.log('always runs');
//     res.send('<h1>Welcome!</h1>');
// });

app.get('*', (req, res) => {
    res.send('Tuki tuki tuki tuki tuki tuki tuki tuki tuki');
});


app.listen(PORT, () => {
    console.log('listening on port: ' + PORT);
})