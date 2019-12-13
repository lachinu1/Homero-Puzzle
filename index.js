var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer')

var app = express()
var upload = multer({dest: 'recursos-estaticos/img'})
var puerto = process.env.PORT || 3000 

var bd_usuarios = []
var bd_avatar = []

app.use(bodyParser.urlencoded ({extended: false}))
app.use(bodyParser.json())
app.use(express.static('./recursos-estaticos'))

app.get('/api/usuarios', function (_, respuesta) {
  respuesta.json({usuarios: bd_usuarios, avatar: bd_avatar})
})

app.get('/api/usuarios/:nombre', function (consulta, respuesta){
  var nombre = consulta.params
  var usuarios = bd_usuarios.find(function (p){
    return p.nombre.toLowerCase()== nombre.toLowerCase()
  })
  if (!usuarios) {
    respuesta.status(404).json({mensaje: 'Recurso no encontrado'})
  }
  respuesta.json(usuarios)
})

app.post('/api/usuarios', upload.single('avatar'), function (consulta, respuesta) {
  bd_usuarios.push({
    nombre: consulta.body.nombre,
    avatar: '/img' + consulta.name.filename
  }) 
})

app.listen(puerto, function () {
  console.log('Servidor escuchando conexion en puerto ' + puerto)
})


