const axios = require('axios')

const getOptions = (url, method = 'GET') => ({
    method,
    url,
    headers: {
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
        'X-RapidAPI-Key': '8296802852mshbfb2b4c9d0a0710p121946jsn920159b32e35'
    }
})

const tickersSearch = (region, query) => {

    return axios.request(getOptions(`https://yh-finance.p.rapidapi.com/auto-complete?q=${query}&region=${region}`)).then((httpResponse) => {
        const result = (httpResponse?.data?.quotes|| []).map((x) => ({
            tickerId: x.symbol,
            exchage: x.exchange,     
            region,       
            companyName: x.shortname            
        }))

        return result
    })
}

const getMarketValues = (region, tickersIds) => axios.request(getOptions(`https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=${region}&symbols=${tickersIds.toString()}`)).then((httpResponse) => {
    const result = (httpResponse?.data?.quoteResponse?.result || []).map(({symbol, regularMarketPrice, regularMarketChangePercent}) => ({
        region,
        tickerId: symbol,
        currentPriceValue: regularMarketPrice,
        changePercentValue: regularMarketChangePercent
    }))

    return result
})

module.exports = {
    tickersSearch,
    getMarketValues
}