// ejercicio
function promesaLeer(path){
    const leerArchivo = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenidoArchivoLeido) => {
                    if (error){
                        console.error('error leyendo archivo', error);
                        reject(error);
                    }else {
                        resolve(contenidoArchivoLeido);
                    }
                }
            )
        }
    );
    return leerArchivo
}
function promesaEscribir(path, contenidoActual, contenidoNuevo){
    const escribirArchivo = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoActual+ '\n' +contenidoNuevo,
                'utf-8',
                (error)=>{
                    if (error){
                        console.error('erroe al leer el archivo', error);
                        reject(error);
                    }else {
                        resolve();
                    }
                }
            )
        }
    );
    return escribirArchivo;
}
function ejercicio(path, contenidoNuevo){
    promesaLeer(path)
        .then( //archivo leido
            (contenidoActual) => {
                return promesaEscribir(
                    path,
                    contenidoActual,
                    contenidoNuevo
                );
            }
        )
        .then(
            ()=> promesaLeer(path)
        )
        .then(
            (contenidoNuevo)=>{
                console.log('Contenido nuevo', contenidoNuevo)
            }
        )
        .catch(
            (error)=>{
                console.error(error);
            }
        );
}
ejercicio('06-ejemplo.txt', 'nueva linea de contenido');