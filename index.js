import express from 'express'
import createHomepageTemplate from './views/index.js'
import createBooksListTemplate from './views/books-list.js'
import BOOKS from './data/data.js'

const PORT = 3000
const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
  return res.send(createHomepageTemplate())
})

app.get('/books', (req, res) => {
  return res.send(createBooksListTemplate())
})

app.post('/books', (req, res) => {
  const { title, author } = req.body
  const id = crypto.randomUUID()

  BOOKS.push({
    id,
    title,
    author,
  })

  return res.send(`<li>${title}, ${author}</li>`)
})

app.listen(PORT, () => {
  console.log('SERVER RUNNING')
})
