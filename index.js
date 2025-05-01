import express from 'express'
import createHomepageTemplate from './views/index.js'
import createBooksListTemplate from './views/books-list.js'

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

app.listen(PORT, () => {
  console.log('SERVER RUNNING')
})
