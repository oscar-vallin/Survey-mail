//keys.js figure out what set of credentials to return
if(process.env.NODE_ENV === 'production'){ 
    //we are in production - return of production set of keys
    module.exports = require('./pro');
}else{
    //we are in development return of dev keys
    module.exports =  require('./dev'); 
}