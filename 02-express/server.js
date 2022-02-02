/*

EXPRESS

*/


const express = require('express');
const app = express();
const fs = require('fs');
const lodash = require('lodash')



app.get('/', (req, res) => {
    console.log(req.method, req.url);
    
    res.send("Hello from ROOT");
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
    res.send(randomJoke);
});

app.use(express.static('pages'));



app.listen(3000,  () => {
    console.log("Server started sucsessfully");
});
