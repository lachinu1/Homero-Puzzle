var ClienteMongo = require ('mongodb').MongoClient;

var url = 'mongodb+srv://chinu:tltar303@cluster0-c3wlg.mongodb.net/test?retryWrites=true&w=majority';  

var nombre_db = 'Chinu';

var db;


ClienteMongo.connect (url, async function (err, cliente) {
    if(err) {
        console.log('Hubo un error:' + JSON.stringify(err))
        process.exit(1)
    }

    console.log('Conexión exitosa!');
    var db = cliente.db(nombre_db);
    await db.collection('usuarios').insertOne({ nombre:'' , avatar:''})
    
    console.log('Usuario nuevo')

 var usuarios = await db.collection('usuarios').find().toArray()  
 
 console.log(':' + JSON.stringify(usuarios))

cliente.close()
});

//async function jugarConMongo(db) {
    
// }