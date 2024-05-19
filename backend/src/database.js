const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI);

const URI = process.env.MONGODB_URI
? process.env.MONGODB_URI
: "mongodb://localhost/databaseTest";

mongoose.connect(URI);

const connect = mongoose.connection;

connect.once('Open', ()=>{
    console.log('Base de datos en funcionamiento');
})