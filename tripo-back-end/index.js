const express = require('express');
const app = express()

app.get('/api/hello', (req, res) => {
  console.log('from express');
  res.send({
    hello: 'worldd'
  });
})

app.listen(3001, (error) => {
  console.log('listening');
});

