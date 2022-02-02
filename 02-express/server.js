/*

EXPRESS

*/


const express = require('express');
const app = express();




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

app.use(express.static('pages'));

app.listen(3000,  () => {
    console.log("Server started sucsessfully");
});
