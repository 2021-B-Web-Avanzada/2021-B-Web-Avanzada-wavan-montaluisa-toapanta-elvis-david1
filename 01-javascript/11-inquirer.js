const inquirer = require('inquirer');
//npm install inquirer
async function main(){
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'apellido',
                    message: 'ingresa tu nombre'
                },
                {
                    type: 'input',
                    name: 'edad',
                    message: 'ingresa tu edad'
                }
            ]);
        console.log('Respuesta', respuesta);
    }catch (e){
        console.error(e);
    }
}