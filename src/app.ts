import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/ping', (req, res) => {
  const pong = {
    ping: req.query.ping || 'To ping, or not to ping; that is the question.',
    received_at: new Date(),
  }

  res.json(pong)
})

app.listen(PORT)
