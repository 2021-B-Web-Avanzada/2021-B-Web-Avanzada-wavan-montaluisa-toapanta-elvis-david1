//destructuracion
const adrian = {
    nombre: "adrian"
};
const carolina = {
    nombre: "carolina",
    apellido: "mora"
};
const adrianCarolina = {
    ...adrian,
    ...carolina
};
console.log('adrianCarolina', adrianCarolina);

//destructuracion de arreglos
const arreglo1 = [1,2,3,4,5];
const arreglo2 = [6,7,8,9,10];
const superArreglo = [
    ...arreglo2, //el orden importa
    ...arreglo1
];
console.log('superArreglo', superArreglo);
console.log(...superArreglo);