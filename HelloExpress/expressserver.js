const express = require('express');
const app = express();

app.get('/',(req,res) => {
  res.send({name: 'Fian', age: 22});
  // res.send('Hello Express');
});

app.listen(3000);
