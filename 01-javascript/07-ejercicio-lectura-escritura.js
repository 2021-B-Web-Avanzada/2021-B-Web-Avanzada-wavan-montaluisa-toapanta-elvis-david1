// ejercicio en clase
const fs = require('fs');

function escribirArchivo(path, contenidoNuevo){
    fs.writeFile(
        path,
        contenidoNuevo,
        { flag: 'a+' },
        (error) => {
            console.error(error);
        }
    );
}

escribirArchivo(
    '06-ejemplo.txt',
    ' otro mensaje'
)