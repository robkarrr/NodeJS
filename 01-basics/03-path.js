/*

PATH

*/

const path = require('path');

//
const file_wo_path = path.basename(__filename);
console.log(file_wo_path);

//Ger dig filens extenstion ex .js .index .txt etc...
const file_ext = path.extname(__filename);
console.log(file_ext);

// Delar upp sökvägen
const parts = path.parse(__filename);
console.log(parts);