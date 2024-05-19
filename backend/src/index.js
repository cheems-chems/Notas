require('dotenv').config();
const app = require('./app');
require('./database');

async function main() {
    await app.listen(app.get('port'));
    console.log('Server activado correctamente', app.get('port'));  
}

main();
