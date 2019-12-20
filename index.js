const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const fs = require("fs")
const port = process.env.PORT || 3000

app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  fs.createReadStream("public/index.html").pipe(req)
});

app.listen(port, (err) => {
  if(err){
    throw err
  }
  console.log(`Listening on port ${port}`);
});