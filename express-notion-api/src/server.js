require('dotenv').config()

const express = require('express')
const cors = require('cors')

const { getFlashcards } = require('./notion')

const app = express()
app.use(cors())

app.get('/', async (req, res) => {
  try {
    const flashcards = await getFlashcards()
    res.send({
      content: flashcards,
    })
  } catch (error) {
    res.send({ error: error })
  }
})

app.listen(process.env.PORT, () => `Running on port ${process.env.PORT}`)
