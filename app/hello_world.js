const generator = require('./generator');
const express = require('express');

const app = express();

app.get("/", function(req, res) {
  const number = req.query.number;
  const helloWorldArray = generator.generateHelloWorlds(number);
  res.send(200, helloWorldArray);
});

app.listen(3000);
