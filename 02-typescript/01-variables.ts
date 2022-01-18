//01-variables.ts

let nombre: string = 'Elvis' ; //primitivo
let nombre2: String = 'David'; //clase String
//nombre = 1;

nombre = 'Luis';

// Duck typing
let apellido = 'Montaluisa';
apellido = 'Mora';
apellido.toUpperCase(); //metodos string

let marihuana: any =2;
marihuana= '2';
marihuana= true;
marihuana = () => '2';

let edadMultiple: number | string | Date =2;
edadMultiple='3';
edadMultiple= new Date();
