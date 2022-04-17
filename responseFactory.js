

const response = (res)=>{

    const send = (value)=> res.status(200).send(value)
    const error = ()=> res.status(500).send('Critical error')
    const unauthorize = ()=> res.status(401).send('Unauthorize access')
    const forbiden = ()=> res.status(403).send('Access denied')

    return {
        send,
        error,
        unauthorize,
        forbiden
    }
}

module.exports = response