require('dotenv').config()

const express = require('express')
const cors = require('cors')

const { getFlashcards } = require('./notion')

const app = express()
app.use(cors())

app.get('/', async (req, res) => {
  const flashcards = await getFlashcards()
  res.send({
    content: flashcards,
  })
})

app.listen(process.env.PORT, () => `Running on port ${process.env.PORT}`)
