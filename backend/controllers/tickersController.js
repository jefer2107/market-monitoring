const responseFactory = require('../responseFactory')
const externalMarketService = require('../services/ExternalMarketService')

const search = (req, res) => {
    const query = req.query.q
    const region = req.query.region    

    externalMarketService.tickersSearch(region, query)
        .then(result => responseFactory(res)
        .send(result))

}

const getAll = (req,res)=>{

    tickerRepositoy.getAll().then((result) => {
        responseFactory(res).send(result)

    }).catch((error) => {
        console.log(error)
        responseFactory(res).error()

    })
}

const getOne = (req,res) => {
    const q = req.query.q
    const region = req.query.region
    

    tickerRepositoy.getOne(q,region).then((result)=>{
        responseFactory(res).send(result)

    }).catch((error)=>{
        console.log(error)
        responseFactory(res).error()
    })
}

module.exports = {
    search,
    getAll,
    getOne
}