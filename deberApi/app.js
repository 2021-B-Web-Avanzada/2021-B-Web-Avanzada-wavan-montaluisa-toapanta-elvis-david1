var express = require('express');
var mysql = require('mysql');

var app = express();
app.use(express.json());
//establecemos los parametros de coneccion
var coneccion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clientesdb'
});
//probar la conecion
coneccion.connect(function (error){
    if (error){
        throw error;
    }else {
        console.log("Coneccion exitosa")
    }
})

app.get('/', function(req, res){
    res.send('Ruta inicio');
});

//mostrar todos los articulos
app.get('/api/clientes', (req, res) =>{
    coneccion.query('SELECT * FROM clientes', (error, filas) =>{
        if (error){
            throw error;
        }else {
            res.send(filas);
        }
    })
})
//retornar un valor mediante el id
app.get('/api/clientes/:id', (req, res) =>{
    coneccion.query('SELECT * FROM clientes WHERE id = ?', [req.params.id], (error, fila) =>{
        if (error){
            throw error;
        }else {
            res.send(fila);
        }
    })
})
//insertar valores a la base POST
app.post('/api/clientes', (req, res) =>{
    let data = {nombre:req.body.nombre, telefono:req.body.telefono, direccion:req.body.direccion};
    let sql = "INSERT INTO clientes SET ?";
    coneccion.query(sql, data, (error, result) =>{
        if (error){
            throw error;
        }else {
            res.send(result);
        }
    });
});
// {
//     "nombre": "Maria Mora",
//     "telefono": "0984652345",
//     "direccion": "Loja"
// }

//actualizar valores
app.put('/api/clientes/:id', (req, res) =>{
    let id = req.params.id;
    let nombre = req.body.nombre;
    let telefono = req.body.telefono;
    let direccion = req.body.direccion;
    let sql = "UPDATE clientes SET nombre = ?, telefono = ?, direccion = ?, WHERE id = ?";
    coneccion.query(sql, [nombre, telefono, direccion], (error, results) =>{
        if (error){
            throw error;
        }else {
            res.send(results);
        }
    });
});
const puerto = process.env.PUERTO || 3000;
app.listen(puerto, function (){
    console.log("Servidor Ok "+puerto);
});