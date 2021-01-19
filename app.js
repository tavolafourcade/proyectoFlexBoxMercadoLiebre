const express = require('express');
const path = require('path');

const app = express();

app.use( express.static(path.resolve(__dirname, './public')));

app.listen(3000, ()=> console.log('Servidor 3000 levantado'));

app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./views/home.html'));
})