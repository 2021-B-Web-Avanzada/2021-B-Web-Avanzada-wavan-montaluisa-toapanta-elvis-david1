//mutables e inmutables
//mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;
//inmutables
const configuracionArchivos = 'PDF';
//configuracionArchivos = "XML";
//vamos a preferir const < let < nunca VAR esta deprecado!


//tipos de variables
const numero = 1;
const sueldo = 1.2;
const texto = "Elvis";
const apellido = "Montaluisa";
const booleanoo = false;
const hijos = null; //object
const zapatos = undefined;
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleanoo);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);
console.log(typeof Number("asd")); //no un numero
console.log(Number("asd")); //no un numero les cataloga como numeros

//truty falsy
if (""){
    console.log("string vacio es verdadero");
}else{
    console.log("string vacio es falsy");
}

if ("Elvis"){
    console.log("string con datos es verdadero");
}else{
    console.log("string con datos es falsy");
}

if (-1){
    console.log("negativo es verdadero");//!
}else{
    console.log("negativo es falsy");
}

if (0){
    console.log("cero es verdadero");
}else{
    console.log("cero es falsy");//!
}

if (1){
    console.log("positivo es verdadero");//!
}else{
    console.log("positivo es falsy");
}

if (null){
    console.log("null es verdadero");
}else{
    console.log("null es falsy"); //falsy
}

if (undefined){
    console.log("undefined es verdadero");
}else{
    console.log("undefinedo es falsy");//falsy
}

//orden de importancia
//1 "const"
//2 "let"
//3 X-> "var"

//objetos JS (JSON) - Arreglos
const Elvis = {
    nombre: "Elvis", //llave: valor,
    false: 'David',
    edad: 27,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'azul',
        talla: 32,
    },
    mascotas: ['Princesa', 'Max'],
};