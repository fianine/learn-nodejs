const express = require('express');
const app = express();

app.use(express.static('web'));
app.get('/', (req,res) => {
  res.send(index.html);
});

const customerList = {
  cust1: {"id":"1","name":"Fian"},
  cust2: {"id":"2","name":"Dian"},
  cust3: {"id":"3","name":"Feby"}
}
app.get('/customers',(req,res) => {
  res.send(customerList);
});
app.get('/customer/:customerId', (req, res) => {
  // res.send(req.params);
  var customerName;
  for(index in customerList){
    if(customerList[index].id == req.params.customerId){
      customerName = customerList[index].name;
    }
  }

  if(customerName != undefined){
    res.send('Customer id : '+req.params.customerId+' has name: '+customerName);
  }else{
    res.send('Customer id : '+req.params.customerId+' dose not exist');
  }
});

app.post('/welcome', (req,res) => {
  res.send('You called POST');
});
app.listen(3000);
