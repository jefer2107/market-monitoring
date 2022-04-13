const configDatabase = require("../configDatabase")

let connection = configDatabase()

const getInternalTickers = async ()=>{

    connection.query(`select * from tickers order by companyName`,
    (error,result)=>{

        if(error) return error

        return result
    })
}

module.exports = getInternalTickers