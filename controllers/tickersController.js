const responseFactory = require('../responseFactory')
const externalMarketService = require('../services/ExternalMarketService')
const tickerRepository = require("../repository/tickerRepositoy")

const search = (req, res) => {
    const query = req.query.q
    const region = req.query.region    

    externalMarketService.tickersSearch(region, query)
        .then(result => responseFactory(res)
        .send(result))

}

const getAll = (req,res)=>{

    tickerRepository.getAll().then((result) => {
        responseFactory(res).send(result)

    }).catch((error) => {
        console.log(error)
        responseFactory(res).error()

    })
}

const getOne = (req,res) => {
    const q = req.query.q
    const region = req.query.region
    

    tickerRepository.getOne(q,region).then((result)=>{
        responseFactory(res).send(result)

    }).catch((error)=>{
        console.log(error)
        responseFactory(res).error()
    })
}

const remove = (req,res) => {
    const q = req.query.q
    const region = req.query.region

    tickerRepository.remove(q,region).then((result) => {
        responseFactory(res).send(result)
    }).catch((error) => {
        console.log(error)
        responseFactory(res).error()
    })
}

const getMarketValues = async (req, res) => {

    const tickersIds = await tickerRepository.getAllTickerIds()
    const result = await externalMarketService.getMarketValues('US', tickersIds)

    res.send(result)
}

const attach = (req, res) => {
    const tickerId = req.body.tickerId
    const exchage = req.body.exchage
    const region = req.body.region
    const companyName = req.body.companyName

    tickerRepository.atach(tickerId,exchage,region,companyName).then(() => {
        responseFactory(res).send()
    })
}

module.exports = {
    search,
    getAll,
    getOne,
    remove,
    getMarketValues,
    attach
}