/*

EXPRESS

*/


const express = require('express');
const fs = require('fs');
const lodash = require('lodash');
const morgan = require('morgan');

const app = express();

// tell app to use ejs
app.set('view engine', 'ejs');


// Middleware
// app.use((req, res, next) => {
//     console.log(`Incoming ${req.method} request for ${req.url}`);
//     next();
// });


//use morgan for logging
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('index', {title: 'My express server'});
})

/*
app.get('/nom', (req, res) => {
    console.log(req.method, req.url);
    
    res.send("Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum");
})

app.get('/api/nom', (res, req) => {
    res.send({msg: 'nom-nom-nom-nom'});
})
*/

/*
app.get('/about', (req, res) =>  {
    res.sendFile(__dirname + '/pages/about.html');

});

app.get('/index', (req, res) =>  {
    res.sendFile(__dirname + '/pages/index.html');
    
});

app.get('/nom', (req, res) =>  {
    res.sendFile(__dirname + '/pages/nom.html');
    
});
*/

app.get('/now', (req, res) => {
    res.send(`<h2>The current time is ${new Date}<h2>`);
})

// Respond with a random oneliner joke
app.get('/jokes', (req, res) => {
	// 1. Somehow read the JSON-contents of data/oneliners.json
    let rawdata = fs.readFileSync(__dirname + '/data/oneliners.json');
    let jokes = JSON.parse(rawdata);
    
	// 2. Get a random item from the array
    shuffledJokes = lodash.shuffle(jokes)
    randomJoke = shuffledJokes[0];

	// 3. Respond with the item (`res.send(item)`)
    res.render('jokes', {randomJoke, title: "A random joke for you!"});
});

app.use(express.static('pages'));


app.listen(3000,  () => {
    console.log("Server started sucsessfully");
});
