const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

require('./routes')(app)

app.listen(3002,()=>{
    console.log('Loading...')
})