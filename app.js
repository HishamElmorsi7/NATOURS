const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status('232').send('Welcome from GET');
});

app.post('/', (req, res) => {
  res.status('232').send('Welcome from POST');
});

port = 8000;
app.listen(port, () => {
  console.log(`I am running at ${port}`);
});
