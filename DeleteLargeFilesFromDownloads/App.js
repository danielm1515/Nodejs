const boot = require('./Boot');
const init = require('./Init');
const start = require('./Start');
boot();
const initResult = init();
start(initResult);
console.log(`Total size : ${initResult}`);

 