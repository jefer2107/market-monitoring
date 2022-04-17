const configDatabase = require("../configDatabase")
const connection = configDatabase()

const exec = async (query) =>  new Promise((res, rej) => {
    connection.query(query, (err,result) => {
        if(err) rej(err)
        else res(result)
    })
})

module.exports = {
    exec
}