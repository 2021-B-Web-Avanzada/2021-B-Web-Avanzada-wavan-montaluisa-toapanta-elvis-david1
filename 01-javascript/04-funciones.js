// funciones
function soloNumeros(a, b, c){
    return a-b+c; //valor a devolver
}
//JS permite el uso de funciones sin validaciones
// soloNumeros('v', true, [1,2,3]);
// soloNumeros(1,2,3,4,5,6);
// soloNumeros();
function soloLetras(a, b, c){ //undefined
    console.log(a,b,c);
}

//tipos de funciones
//funciones nombradas named function
function funcionNombrada(){
}
const funcionSinNombre1 = function () {};
var funcionSinNombre2 = function () {};
let funcionSinNombre3 = function () {}; //let reemplazo al var por el alcance de las funciones
[].forEach(function (){})
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

//funciones anonimas FAT arrow funtion
const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () => {};
[].forEach(() => {})
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();

const funcionFatArrow4 = () => {};
const funcionFatArrow5 = (x) => {
    return x+1;
};
const funcionFatArrow6 = (x) => x+1; //una sola linea omitiendo cosas como el return
const funcionFatArrow7 = x => x+1; //si solo tenemos un parametro puedo omitir los parentesis
const funcionFatArrow8 = (x,y,z) => x+y+z;

// ... -> son parametros infinitos que llegan en un arreglo
//         solo se puede tener uno de estos por funcion
function sumarNumeros(...otrosNumeros) { //parametros inf [2,3,4,5,6,7...]
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return total;
    //return otrosNumeros.reduce((a, v) => a+v,0);
}
sumarNumeros(1,2,3,4,5,6,7,8,9,10,11,12,13)
