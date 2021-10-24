const express = require('express');
const { handlebars } = require('hbs');
const app = express();
const port = 3000;
const hbs = require('hbs');


//handlebars


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + "/views/partials/");

app.get('/', (req, res) => {
  res.render ('index'); {
    nombre: "Pin pun pan";
  
}}
)

app.get('/contacto', (req, res) => {
  res.render ('contacto'); {
  
}}
)

// contenido estatico

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render ('index'); {
  
}}

)

app.get('/contacto', (req, res) => {
  req.render ('contacto'); {
  
}}

)

app.get('/pastas', (req, res) => {
  req.render ('pastas'); {
  
}}

)



  
// })
// app.get('/rrss', (req, res) => {
//     res.sendFile(__dirname +  'public/rrss.html')
//   })
    app.get('404', (req, res) => {
      res.sendFile(__dirname +  'public/404.html')


   })

   app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`);
  });