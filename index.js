import express from 'express'

const PORT = 3000
const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
  return res.send()
})

app.listen(PORT, () => {
  console.log('SERVER RUNNING')
})
