const express = require('express')
const app = express()
const path = require('path')

const hometasks = []
const worktasks = []

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index', { hometasks })
})

app.post('/', (req, res) => {
  const newTask = req.body.task
  hometasks.push(newTask)
  res.redirect('/')
})
app.get('/work', (req, res) => {
  res.render('work', { worktasks })
})
app.post('/work', (req, res) => {
  const newtask = req.body.task
  worktasks.push(newtask)
  res.redirect('/work')
})

const port = 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
