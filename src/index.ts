const a = 10;
console.log(a);


const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgr',
    host: 'database.server.com',
    database: 'mydb',
    password: 'secretpassword',
    port: 3211,
})
