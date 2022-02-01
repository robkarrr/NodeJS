/*

File system

*/


/* 
const fs = require('fs');

console.log("before readdir ... ");

fs.readdir('.', (error, files) => {
    console.log("Content in this directory is: ")
    console.log(files);
});

console.log("After readdir...");
*/


const fs = require('fs').promises;
/*
fs.readdir('.')
    .then(files => {
        console.log("Content in this directory is: ")
        console.log(files);
    })

    .catch(e => {
        console.error(e);
    });

*/


fs.readFile('./data/loremipsum.txt', 'utf-8')
    .then(data => {
        console.log("This is the data in the file: ");
        console.log(data);
    })

    .catch(e => {
        console.error(e);
    })