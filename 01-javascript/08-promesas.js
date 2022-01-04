//promesas
const fs = require('fs');

function promesaEsPar(numero){
    const miPrimeraPromesa = new Promise(
        (
            resolve, //return
            reject // throw
        ) => {
            if (numero % 2 == 0){
                resolve(numero);
            }else {
                reject('No es par =('); //throw no es par
            }
        }
    )
    return miPrimeraPromesa
}

function promesaElevarAlCuadrado(numero){
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado); //return numero elevado al cuadrado
        }
    )
    return miPrimerPromesa
}

promesaEsPar(4)
.then( //aceptan un return de promesas
    (datosPromesa)=>{
        console.log(datosPromesa)

    }
) // try
.then(
    (datosElevarAlCuadrado)=>{
        console.log(datosElevarAlCuadrado);
    }
)
.catch(
    (error)=>{
        console.log(error)
    }
)  //catch
.finally() //finally