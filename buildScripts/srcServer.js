const express = require('express')
const app = express()

const path = require('path')
const open = require('open')
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});
app.listen(port, () => {
  console.log(`Example app listening on port port!`);
  open('http://localhost:' + port);
});