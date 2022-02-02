


const geo = require('./modules/geometry');
const num = require('./modules/num');

let radius = 4;

let area = geo.area(radius);

// let approxArea = Math.round(area * 10) / 10;
// let approxArea = num.roundWith1Decimal(area) * 10/10;
// let approxArea = num.roundWith2Decimal(area) * 100/100;
// let approxArea = num.round(area, 4);