import express from 'express'
import BOOKS from './data/data.js'
import createBookTemplate from './views/book.js'
import createBooksListTemplate from './views/books-list.js'
import createEditFormTemplate from './views/edit.js'
import createHomepageTemplate from './views/index.js'

const PORT = 3000
const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
  return res.send(createHomepageTemplate())
})

app.get('/books', (req, res) => {
  return res.send(createBooksListTemplate(BOOKS))
})

app.post('/books', (req, res) => {
  const { title, author } = req.body
  const id = crypto.randomUUID()

  const book = {
    id,
    title,
    author,
  }

  BOOKS.push(book)

  return res.send(createBookTemplate(book))
})

app.get('/books/:id', (req, res) => {
  const { id } = req.params

  const book = BOOKS.find((book) => book.id === id)

  if (!book) return res.send()

  return res.send(createBookTemplate(book))
})

app.delete('/books/:id', (req, res) => {
  const { id } = req.params

  const bookIndex = BOOKS.find((book) => book.id === id)

  if (bookIndex !== -1) {
    BOOKS.splice(bookIndex, 1)
  }

  return res.send(``)
})

app.put('/books/:id', (req, res) => {
  const { id } = req.params
  const { title, author } = req.body

  const book = BOOKS.find((book) => book.id === id)
  book.author = author
  book.title = title

  return res.send(createBookTemplate(book))
})

app.get('/books/edit/:id', (req, res) => {
  const { id } = req.params

  const book = BOOKS.find((book) => book.id === id)

  return res.send(createEditFormTemplate(book))
})

app.post('/books/search', (req, res) => {
  const searchText = req.body.search.toLowerCase()

  const books = BOOKS.filter((b) => b.title.toLowerCase().includes(searchText))

  return res.send(createBooksListTemplate(books))
})

app.listen(PORT, () => {
  console.log('SERVER RUNNING')
})
