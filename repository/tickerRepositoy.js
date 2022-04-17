const queryExecute = require('../util/queryExecute')

const getAll = async () => queryExecute.exec(`select * from tickers order by companyName`)

const atach = async (tickerId,exchage,region,companyName) => queryExecute
.exec(`insert into tickers(tickerId,exchage,region,companyName)
value("${tickerId}","${exchage}","${region}","${companyName}")`)

const getAllTickerIds = async () => queryExecute
    .exec(`select tickerId from tickers order by companyName`)
    .then(result => result.map(x => x.tickerId))

const getOne = async (tickerId, region ) => queryExecute
.exec(`select * from tickers where tickerId="${tickerId}" and region="${region}"`)

const remove = async (tickerId,region) => queryExecute
.exec(`delete from tickers where tickerId="${tickerId}" and region="${region}"`)

module.exports = {
    getAll,
    getAllTickerIds,
    getOne,
    remove,
    atach
}