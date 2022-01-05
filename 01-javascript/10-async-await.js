const promesaLeerArchivo = () => {
    return new Promise(
        (res, rej) => {
            res('contenido leer archivo');
            //rej('erroe =(');
        }
    );
}
const promesaEscribirArchivo = () => {
    return new Promise(
        (res, rej) => {
            res('contenido escribir archivo');
            //rej('erroe =(');
        }
    );
}
//async await
//metodos de clases
// funcion
const ejemplo1 = async function (){}
//const ejemplo1 = async (){}

// async funtion ejercicio(){
//     console.log('1')
//     try {
//         console.log('2');
//         const contenidoArchivoActual = await promesaLeerArchivo();
//         console.log(contenidoArchivoActual);
//         console.log('3');
//         await promesaEscribirArchivo();
//         console.log(nuevoContenido);
//         console.log('5');
//     }catch (error){
//         console.error(error);
//     }
//     console.log('6');
//     console.log('7');
//     return nuevoContenido;
// }
// ejercicio() .then(
//     console.log('esta es la respuesta del async await', data);
// ) .catch() .finally();