
const controllerRoutes = (app)=>{

    //tickers
    const tickersController = require('./controllers/tickersController')

    app.get('/tickers', tickersController.search)
    app.get('/tickers/attachments', tickersController.getAll)
    app.delete('/ticker', tickersController.remove)
    app.get('/ticker', tickersController.getOne)
    app.post('/tickers/attachments', tickersController.attach)  

    app.get('/tickers/marketValues', tickersController.getMarketValues)
}

module.exports = controllerRoutes