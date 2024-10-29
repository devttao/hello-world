const express = require('express');
const app = express();
const os = require('os');

app.get('/', (req, res) => {
  console.log('Hello world received a request.');

  const target = process.env.TARGET || 'World';
  // res.send(`Hello ${target}!`);
  res.send("Hello World!\nYou've hit [" + os.hostname() + "] , nodejs app V1.0 \n");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});

