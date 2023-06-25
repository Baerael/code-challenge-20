import express from 'express'

const app = express()
app.use(express.json())
import cors from 'cors'
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers () choke on 204
	methods: ['GET', 'POST']
}

app.use(cors(corsOptions))

app.post('/calculate', (req, res) => {
	console.log(req.body)
	const { x, y, operation } = req.body
	const result = eval(`${x} ${operation} ${y}`)
	res.send({result}).status(200)
})

app.listen(8080)