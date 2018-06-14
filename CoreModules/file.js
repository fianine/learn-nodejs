const fs = require('fs');
fs.readFile('Readme.txt', (err, data) => {
  if(err){
    throw err;
  }
  console.log(data.toString());
});

fs.appendFile('Readmetoo.txt','And this is my twitter @PrinceAlfiyana', (err) => {
  if(err){
    throw err;
  }
  console.log('Completed Appending');
});

fs.unlink('Readmetoo.txt',(err) => {
  if(err) throw err;
  console.log('Completed Deleting');
});
