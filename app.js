const express = require('express');
const app = express();
const port = 5044;

app.get('/', (req, res) => {
  res.send('Hello World!\
					 Good to meet you.');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
