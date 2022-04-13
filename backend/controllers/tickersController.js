const responseFactory = require('../responseFactory')
const externalMarketService = require('../services/ExternalMarketService')

const search = (req, res) => {
    const query = req.query.q
    const region = req.query.region    

    externalMarketService.tickersSearch(region, query)
        .then(result => responseFactory(res)
        .send(result))

}

module.exports = {
    search
}