const express = require('express')

const app = express()

app.use(express.urlencoded({extend:true}))
app.use(express.json())
app.get('/', (req,res)=>{
	return res.sendStatus(200)
})


const candidateRouter = require('src/core/candidates/routes')
app.use('/candidates', candidateRouter)
module.exports = app