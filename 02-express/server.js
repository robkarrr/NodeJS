/*

EXPRESS

*/


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("Someone requested my root");
    
    res.send("Hello World! HELLO IM GROOT!")
})



app.listen(3000,  () => {
    console.log("Server started sucsessfully");
});
