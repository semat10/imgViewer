const express = require('express');
const app = express();
var bodyParser = require('body-parser')

app.use(express.static('React/rct/src'));
// app.use(express.static('React/rct/build'));
app.use(bodyParser.json())

app.use(jsonParser);
/////////////////////////////////////////////////////////////////////////

// app.post('/addImg', (req, res) => {

//   const { name, password } = req.body;
//   const index = users.findIndex(user => user.name === name);
//   if (index === -1) {

//     users.push({ name, password })
//   }

//   res.send({ ok: true })
// })

const imagesList = [];
app.post('/addNewImg', (req, res) => {
  let imgId = uniqueId();
  const url= req.body;
  let score = 0;

  // const index = images.findIndex(img => img.id === id);
  // if (index < 0 ) {

  imagesList.push({imgId:imgId, url:url, score:score});
//  }
})



/////////////////////////////////////////////////////////////////////////
// const directorInfo=[
//   {organization:'בנק הפוiiiiiעלים',
//   img:'https://images.globes.co.il/images/NewGlobes/big_image_800/2019/f800x392.2019213T094727.jpg',
//   directorName:'עיסאווי פריג'},

// ]

// app.get('/get-director',(req, res)=>{
//   res.send(directorInfo)
// })



// const recentNews=[
//   {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
//   {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
//   // {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
//   // {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
//   {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''}
// ]

// app.get('/get-news',(req, res)=>{
//   res.send(recentNews)
// })



const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log('listening', port)
})
