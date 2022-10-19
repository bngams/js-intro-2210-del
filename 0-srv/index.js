const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors());

// http://localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// http://localhost:3000/menus
app.get('/menus', (req, res) => {
  const menu = [ 
    { title: "Home", id: "home"}, 
    { title: "Profile", id: "profile"},
    { title: "Messages", id: "messages"},
    { title: "Settings", id: "settings"},
  ];
  res.send(menu);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})