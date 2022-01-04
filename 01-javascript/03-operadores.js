const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//funciones como parametros
//FIND
//enviamos una expresion -> truty falsy
//devuelve el primero que cumpla esa condicion
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual,arregloCompleto){
            console.log('valorActual',valorActual);
            console.log('indiceActual',indiceActual);
            console.log('arregloCompleto',arregloCompleto);
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaFind', respuestaFind); //Cristian si no encuentra devuelve undefined

//FIND
//enviamos una expresion -> truty falsy
//devuelve el indice que cumpla esa condicion
const respuestaIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual,arregloCompleto){
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaIndex', respuestaIndex); //indice -> 6 si no hay devuelve -1

//for each
//itera el arreglo
const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual,arregloCompleto){
            console.log('valorActual', valorActual);
        }
    );
console.log('respuestaForEach', respuestaForEach); //undefined

//MAP
//modifica o muta el arreglo y devuelve un nuevo arreglo
//elviamos los datos del arreglo
//devuelve un nuevo arreglo
const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual,arregloCompleto) => {
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
            };
            return nuevoElemento;
        }
    );
console.log('respuestaMap', respuestaMap);

//filter
//enviamos truty falsy
//devuelve los elementos que cumplen esa condicion
const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual,arregloCompleto) => {
            return valorActual.nota >= 14;
        }
    );
console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);

//some -> expresion
//devuelve booleano
//hay alguna nota menor a 9? si no
//OR
const respuestaSome = arreglo
    .some(
        function (valorActual, indiceActual,arregloCompleto) {
            return valorActual.nota < 9;
        }
    );
console.log('respuestaSome', respuestaSome);

//every -> expresion
//devuelve booleano
//todas las notas son mayores a 14? si no
//AND
const respuestaEvery = arreglo
    .every(
        function (valorActual, indiceActual,arregloCompleto) {
            return valorActual.nota < 9;
        }
    );
console.log('respuestaEvery', respuestaEvery);