function printSomething(){
  console.log('Hello');
  console.log('Im here -> ',__dirname+' and my name is ->',__filename);
}

setTimeout(printSomething,1000);
