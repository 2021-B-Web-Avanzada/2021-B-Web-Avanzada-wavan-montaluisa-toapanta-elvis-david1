//02-interfaces

interface Usuario{
    nombre: string;
    apellido: string;
    edad?: number; // opcional
    sueldo?: number;
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto:number) => number;
    estadoActual: () => 'AP'| 'AF' | 'AT';
    //calcular impuesto parametro numero impuesto , sueldo + sueldo  + impuesto
    // estadoActual no reciba parametros, 'AP' 'AF' 'AT'
}

let user : Usuario ={
    nombre: 'Elvis ',
    apellido: 'Montaluisa',
    casado: 0,
    sueldo: 40.4,
    estado: 'AC',
    imprimirUsuario:(mensaje) =>{
        return 'El mensaje es ' + mensaje;
    },
    calcularImpuesto : impuesto => {
    return this.sueldo+ this.sueldo * impuesto;
    },
    estadoActual: () => {
        switch (this.estado){
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
}