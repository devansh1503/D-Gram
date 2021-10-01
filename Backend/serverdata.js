const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use('/main', express.static('../'))
app.use('/chat', express.static('../chat'))
app.use('/profile', express.static('../profile page'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../login.html'));
})
app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  })
  app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, '../chat/chatmain.html'));
  })
  app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '../profile page/profile.html'));
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})