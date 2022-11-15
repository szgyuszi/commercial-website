const Pool = require('pg').Pool
const pool = new Pool({
    user: 'cula',
    host: 'localhost',
    database: 'screend',
    password: 'dudidudi12',
    port: 5432,
})
module.exports = {
    pool,
}