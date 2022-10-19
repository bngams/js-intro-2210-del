// import a library from node_modules
const express = require('express')
const cors = require('cors')

// use express lib to start an app
const app = express()
const port = 3000

// configure app with cors
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

// launch app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})