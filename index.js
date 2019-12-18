var express = require("express");
var bodyParser = require("body-parser");
var ClienteMongo = require("mongodb").MongoClient;

var puerto = process.env.PORT || 3000

var url = 'mongodb+srv://chinu:tltar303@cluster0-c3wlg.azure.mongodb.net/test?retryWrites=true&w=majority';  


var nombre_db = "Chinu";

// Variable donde guardamos la conexión a MongoDB Atlas
var db;

/* El tercer argumento de connect() es la funcion asincrónica que intenta
conectarse al servidor de Atlas, puede retornar "err" si hay algun problema
o "cliente" si se pudo conectar.
*/
ClienteMongo.connect(url, { useUnifiedTopology: true }, async function(
  err,
  cliente
) {
  // Si hay un error, hace console.log y cierra el proceso
  if (err) {
    console.log("Hubo un error:" + JSON.stringify(err));
    process.exit(1);
  }

  /* Si la conexión se estableció hace console.log y la guarda
  en la variable "db" para que la podamos usar después.
  */
  console.log("Conexión con Mongo exitosa!");
  db = cliente.db(nombre_db);
});

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./recursos-estaticos"));

/* Este endpoint recibe consultas solo con metodo POST, es el que
vamos a usar para insertar usuarios a MongoDB
*/
app.post("/juego", async function(consulta, respuesta) {
  await db.collection("usuarios").insertOne({
    nombre: consulta.body.usuario,
    avatar: consulta.body.avatar,
    tiempo: consulta.body.tiempo
  });

  respuesta.send("Gracias por enviar tu resultdo! Hasta pronto!");
});

app.get("/tabla", async function(consulta, respuesta) {
  var usuarios = await db
    .collection("usuarios")
    .find()
    .toArray();

  respuesta.send(usuarios);
});

app.listen(puerto, function() {
  console.log("Servidor corriendo en " + puerto);
});
