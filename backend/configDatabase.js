const mysql = require('mysql2')

const configDatabase = ()=>{

    const connection = mysql.createConnection({
        host:'localhost',
        user: 'root',
        database: 'market_monitoring'
    })

    return connection
}

module.exports = configDatabase