require('dotenv').config()

const express = require('express')

const { getFlashCards } = require('./notion')

const app = express()

app.get('/', async (req, res) => {
  const flashCards = await getFlashCards()
  res.send({
    data: flashCards,
  })
})

app.listen(process.env.PORT, () => `Running on port ${process.env.PORT}`)
