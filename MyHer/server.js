const express = require('express');
const app = express();


app.use(express.static('public'));

const users = [
  {name:'Kilani', id:'222222222'},
  {name:'Yara', id:'3333333'},
  {name:'Ihab', id:'444444'}
]

//route
app.get('/get-users',(req, res)=>{
  res.send(users)
})




const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('listening', port)
})









// const express = require('express')
// const app = express();

// // var path= require('path');
// const port=process.env.PORT || 3000;
// app.use(express.static('public'));


// app.listen(port,function(){
// console.log('listening',port)
// }
// )

