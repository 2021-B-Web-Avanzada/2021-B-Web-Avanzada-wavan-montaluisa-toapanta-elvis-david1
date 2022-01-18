const inquirer = require('inquirer');
const fs = require('fs');

async function main() {
    const path = './datos.txt';

    //menu
    async function menu() {
        try{
            const menu = await inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'seleccion1',
                        message: 'Seleccione una opcion',
                        choices: ['Cliente', 'Pedido']
                    },
                ]);
            // console.log(menu);
            switch (menu.seleccion1) {
                case 'Cliente':
                    menuCliente();
                    break;
                case 'Pedido':
                    menuPedido();
                    break;
            }
        } catch(e){
            console.error(e);
        }
    }

    async function menuCliente() {
        try{
            const menuCliente2 = await inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'seleccion2',
                        message: 'Elige una opcion',
                        choices: [
                            '1) Crear cliente',
                            '2) Consultar cliente',
                            '3) Actualizar cliente',
                            '4) Eliminar cliente',
                            '5) Atras'
                        ]
                    }
                ]);
            //console.log(menuCliente2);
            switch (menuCliente2.seleccion2) {
                case '1) Crear cliente':
                    await crearCliente();
                    console.log('Creando cliente');
                    break;
                case '2) Buscar cliente':
                    await menuBuscarClinte();
                    break;
                case '3) Actualizar cliente':
                    await actualizarCliente()
                    break;
                case '4) Eliminar cliente':
                    await borrarCliente();
                    break;
                case '5) Atras':
                    menu();
            }
        } catch(e){
            console.error(e);
        }
    }

    async function menuPedido() {
        try{
            const menuPedido2= await inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'seleccion2',
                        message: 'Elige una opcion',
                        choices: [
                            '1) Crear Pedido',
                            '2) Buscar Pedido',
                            '3) Actualizar Pedido',
                            '4) Eliminar Pedido',
                            '5) Atras']
                    }
                ]);
            //console.log(menuPedido2);
            switch (menuPedido2.seleccion2) {
                case '1) Crear Pedido':
                    await crearPedido();
                    break;
                case '2) Buscar Pedido':
                    await buscarPedido();
                    break;
                case '3) Actualizar Pedido':
                    await actualizarPedido();
                    break;
                case '4) Eliminar Pedido':
                    await eliminarPedido();
                    break;
                case '5) Atras':
                    menu();
            }
        } catch(e){
            console.error(e);
        }
    }

    async function menuBuscarClinte() {
        try{
            const menuConsultarCliente = await inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'seleccion',
                        message: 'Seleccione una opcion',
                        choices: [
                            '1) Consultar todos los clientes',
                            '2) Buscar un cliente',
                            '3) Atras'

                        ]
                    }
                ]);
            switch (menuConsultarCliente.seleccion) {
                case '1) Consultar todos los clientes':
                    const respuestaConsultarTodosLosClientes = await consultarTodosLosClientes();
                    console.log(respuestaConsultarTodosLosClientes);
                    menuCliente();
                    break;
                case '2) Buscar un cliente':
                    const respuestaConsultarCliente = await consultarCliente();
                    console.log(respuestaConsultarCliente);
                    menuCliente();
                    break;
                case '3) Atras':
                    menuCliente();
            }
        } catch(e){
            console.error(e);
        }
    }

    menu();

    //Implementacion del CRUD
    async function crearCliente() {
        try {
            const respuestaCrearCliente = await inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'nombreCliente',
                        message: 'Digite el nombre del cliente:'
                    },
                    {
                        type: 'input',
                        name: 'apellidoCliente',
                        message: 'Digite el apellido del cliente:'
                    },
                    {
                        type: 'input',
                        name: 'correo',
                        message: 'Digite el correo del cliente:'
                    },
                    {
                        type: 'input',
                        name: 'telefono',
                        message: 'Digite el telefono del cliente:'
                    },
                    {
                        type: 'input',
                        name: 'direccion',
                        message: 'Digite la direccion del cliente:'
                    }

                ]);
            console.log('Nuevo Cliente: ', respuestaCrearCliente);
            //const boolEnsamblado = (/S/i).test(respuestaCrearCliente.ensamblado)
            //const boolPermiso = (/S/i).test(respuestaCrearCliente.permiso)
            const respuestaCrearClienteTypado = {
                nombreCliente: respuestaCrearCliente.nombreCliente,
                apellidoCliente: respuestaCrearCliente.apellidoCliente,
                correo: respuestaCrearCliente.correo,
                telefono: respuestaCrearCliente.telefono,
                direccion: respuestaCrearCliente.direccion,
                //modelos: []
            }
            const respuestaLeerArchivo= await promesaLeerArchivo(path);
            if (respuestaLeerArchivo !== '') {
                await promesaEscribiCliente(respuestaLeerArchivo + '\n' + JSON.stringify(respuestaCrearCliente));
            } else {
                await promesaEscribiCliente(JSON.stringify(respuestaCrearCliente));
            }
            await menuCliente();
        } catch (e) {
            console.error(e);
        }
    }

    async function consultarCliente() {
        try {
            const nombreAConsultar = await inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'nombreCliente',
                        message: 'Digite el nombre del cliente:'
                    }
                ]);
            // console.log('Consultar cliente: ', nombreAConsultar);
            const cliente = await promesaLeerArchivo(path);
            // console.log(cliente);
            let arrayCliente = [];
            if (cliente !== '') {
                arrayCliente = cliente.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
                //console.log('arrayCliente',arrayCliente);
            }

            if (arrayCliente.length === 0) {
                return 'El cliente no esta registrado';
            } else {
                if (arrayCliente.some(
                    valorActual => {
                        return valorActual.nombreCliente === nombreAConsultar.nombreCliente;
                    }
                )) {
                    return (arrayCliente.filter(
                            (valorActual) => {
                                return valorActual.nombreCliente === nombreAConsultar.nombreCliente;
                            }
                        )
                    );
                } else {
                    return 'El cliente no existe: ' + nombreAConsultar.nombreCliente;
                }
            }
        } catch (e) {
            console.error(e);
        }
    }
// hasta aqui esta
    async function consultarTodosLosClientes() {
        try {
            const clientes = await promesaLeerArchivo(path);
            //console.log(clientes);
            let arrayClientes = [];
            if (clientes !== '') {
                arrayClientes = clientes.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
                //console.log('arrayClientes',arrayClientes);
            }
            if (arrayClientes.length === 0) {
                return 'No hay clientes registrados';
            } else {
                return (arrayClientes);


            }
        } catch (e) {
            console.error(e);
        }
    }
//arriba esta con s
    async function borrarCliente() {
        try {
            const cliente = await promesaLeerArchivo(path);
            console.log(cliente);
            let arrayCliente = [];
            if (cliente !== '') {
                arrayCliente = cliente.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
                //console.log('arrayCliente',arrayCliente);
            }
            if (arrayCliente.length === 0) {
                return 'No hay clientes registrados';
            } else {
                const respuestaSelecBorrar = await promesaSeleccionarCliente(arrayCliente.map(
                    valorActual => {
                        return valorActual.nombreCliente;
                    }
                ));
                arrayCliente.splice(arrayCliente.findIndex(
                    valorActual => {
                        return valorActual.nombreCliente === respuestaSelecBorrar.borrarCliente;
                    }
                ), 1);
                await promesaEscribiCliente(actualizarRegistro(arrayCliente));
            }
            //console.log('Cliente eliminada');
            menuCliente();
        } catch (e) {
            console.error(e);
        }
    }

    async function actualizarCliente(){
        try{
            const cliente = await promesaLeerArchivo(path);
            console.log(cliente);
            let arrayCliente = [];
            if (cliente !== '') {
                arrayCliente = cliente.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
                console.log('arrayCliente',arrayCliente);
            }
            if (arrayCliente.length === 0) {
                return console.log('No hay clientes registrados');

            } else {
                const respuestaSelecBorrar = await promesaSeleccionarCliente(arrayCliente.map(
                    valorActual => {
                        return valorActual.nombreCliente;
                    }
                ));
                arrayCliente.splice(arrayCliente.findIndex(
                    valorActual => {
                        return valorActual.nombreCliente === respuestaSelecBorrar.borrarCliente;
                    }
                ), 1);
                await promesaEscribiCliente(actualizarRegistro(arrayCliente));
            }
            await crearCliente();


        }catch (e) {
            console.error(e);
        }

    }

    const promesaSeleccionarCliente = (cliente) => {
        return inquirer
            .prompt({
                type: 'list',
                name: 'borrarCliente',
                message: 'Seleccione el cliente:',
                choices: cliente,
            });
    }

    function actualizarRegistro(arrayCliente) {
        let listaActualizada = '';
        arrayCliente.map(
            (valorActual, indiceActual) => {
                if (indiceActual < arrayCliente.length - 1) {
                    listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
                } else {
                    listaActualizada = listaActualizada + JSON.stringify(valorActual);
                }

            }
        );
        return listaActualizada;
    }

    const promesaEscribiCliente = (contenidoNuevo) => {
        return new Promise(
            (resolve, reject) => {
                fs.writeFile(
                    path,
                    contenidoNuevo,
                    'utf-8',
                    (error) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve();
                        }
                    }
                );
            }
        );
    }

    const promesaLeerArchivo = (path) => {
        return new Promise(
            (resolve, reject) => {
                fs.readFile(
                    path,
                    'utf-8',
                    (error, contenido) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(contenido);
                        }
                    }
                );
            }
        );
    }

    const promesaSeleccionarClienteParaCrearPedido = (cliente) => {
        return inquirer
            .prompt({
                type: 'list',
                name: 'crearPedidoParaClente',
                message: 'Seleccione un cliente al que pertenece el pedido:',
                choices: cliente,
            });
    }

    async function crearPedido() {
        try {

            const todosCliente = await promesaLeerArchivo(path);
            //console.log('cliente',todosCliente);
            let arrayCliente = [];
            if (todosCliente.length === 0) {
                console.log('No hay clientes registrados');
            } else {
                if (todosCliente !== '') {
                    arrayCliente = todosCliente.split('\n').map(
                        valorActual => {
                            return JSON.parse(valorActual);
                        });
                    //console.log('arrayCliente',arrayCliente);

                    const respuestaSelecCrearPedido = await promesaSeleccionarClienteParaCrearPedido(arrayCliente.map(
                        valorActual => {
                            return valorActual.nombreCliente;
                        }
                    ));
                    // console.log('respuestaSelecCrearPedido',respuestaSelecCrearPedido)
                    const clientes = arrayCliente.splice(arrayCliente.findIndex(
                        valorActual => {
                            //console.log('valorActual',valorActual)
                            if (valorActual.nombreCliente === respuestaSelecCrearPedido.crearPedidoParaCliente) {
                                return valorActual;
                            }
                        }
                    ), 1);
                    await promesaEscribiCliente(actualizarRegistro(arrayCliente));
                    const cliente = clientes[0];

                    const respuestaCrearPedido = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'tipoPedido',
                                message: 'Digita el tipo de pedido(Camisetas, Pantalones, Chompas):'
                            },
                            {
                                type: 'input',
                                name: 'cantidad',
                                message: 'Digita la cantida del pedido:'
                            },
                            {
                                type: 'input',
                                name: 'fecha',
                                message: 'Digita la fecha de entrega:'
                            },
                            {
                                type: 'input',
                                name: 'trasporte',
                                message: '¿Necesita Trasporte?(S/N):'
                            },
                            {
                                type: 'input',
                                name: 'descuento',
                                message: 'Tiene Decuento?(S/N):'
                            }

                        ]);
                    // console.log('Nuevo pedido: ', respuestaCrearPedido);
                    const booltrasporte = (/S/i).test(respuestaCrearPedido.trasporte);
                    const booldescuento = (/S/i).test(respuestaCrearPedido.descuento);
                    const respuestaCrearPedidoTypado = {
                        tipoPedido: respuestaCrearPedido.tipoPedido,
                        cantidad: respuestaCrearPedido.cantidad,
                        fecha: respuestaCrearPedido.fecha,
                        trasporte: booltrasporte,
                        descuento: booldescuento
                    }

                    cliente.pedido.push(respuestaCrearPedidoTypado);

                    const respuestaLeerArchivo = await promesaLeerArchivo(path);
                    if (respuestaLeerArchivo !== '') {
                        await promesaEscribiCliente(respuestaLeerArchivo + '\n' + JSON.stringify(cliente));
                    } else {
                        await promesaEscribiCliente(JSON.stringify(cliente));
                    }
                }
            }
            await menu();

        } catch (e) {
            console.error(e);
        }
    }

    async function eliminarPedido(){
        try {
            const todoscliente = await promesaLeerArchivo(path);
            //console.log('cliente',todoscliente);
            let arrayCliente = [];
            if (todoscliente.length === 0) {
                console.log('No hay clientes registrados');
            } else {
                if (todoscliente !== '') {
                    arrayCliente = todoscliente.split('\n').map(
                        valorActual => {
                            return JSON.parse(valorActual);
                        });
                    //console.log('arrayCliente',arrayCliente);

                    const respuestaSelecEliminarPedido = await promesaSeleccionarClienteParaCrearPedido(arrayCliente.map(
                        valorActual => {
                            return valorActual.nombreCliente;
                        }
                    ));
                    // console.log('respuestaSelecCrearProfesor',respuestaSelecEliminarProfesor)
                    const clientes = arrayCliente.splice(arrayCliente.findIndex(
                        valorActual => {
                            //console.log('valorActual',valorActual)
                            if (valorActual.nombreMarca === respuestaSelecEliminarPedido.crearModeloEnMarca) {
                                return valorActual;
                            }
                        }
                    ), 1);
                    await promesaEscribiCliente(actualizarRegistro(arrayCliente));
                    const cliente = clientes[0];
                    //console.log('pedido',JSON.stringify(cliente))
//                    console.log('pedido',JSON.stringify(cliente.pedido));
                    const arrayPedido =  JSON.stringify(cliente.pedido);
                    console.log('cliente', cliente);
                    // console.log('Copie el pedido de aqui: ', arrayPedido);

                    const menuEliminarPedido= await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'seleccionPedidoEliminar',
                                message: 'Ingrese el indice del pedido que desea eliminar',
                            }
                        ]);
                    const pedidoEliminar = await menuEliminarPedido;
                    //  console.log('pedidoEliminar >>>> ',pedidoEliminar.seleccionPedidoEliminar);

                    const eliminarPedidoDelArray = (indice, arreglo) => {
                        return arreglo.splice(indice, 1);
                        // return arreglo.filter( e => e !== indice );
                    }

                    const arrayArrayPedido = JSON.parse(arrayPedido);
                    //console.log('ELIMINAR', pedidoEliminar )
                    eliminarPedidoDelArray(pedidoEliminar.seleccionPedidoEliminar , arrayArrayPedido);
                    //console.log( 'arrayPedido',arrayArrayPedido );
                    //console.log('cliente',JSON.stringify(cliente))
                    const clientePedidoEliminado = {
                        nombreCliente: cliente.nombreCliente,
                        apellidoCliente: cliente.apellidoCliente,
                        correo: cliente.correo,
                        telefono: cliente.telefono,
                        direcccion: cliente.direcccion,
                        pedido: arrayArrayPedido
                    }
                    //console.log('clientePedidoEliminado >>>> ',clientePedidoEliminado)
                    const respuestaLeerArchivo = await promesaLeerArchivo(path);
                    if (respuestaLeerArchivo !== '') {
                        await promesaEscribiCliente(respuestaLeerArchivo + '\n' + JSON.stringify(clientePedidoEliminado));
                    } else {
                        await promesaEscribiCliente(JSON.stringify(clientePedidoEliminado));
                    }
                }
            }
            await menu();

        } catch (e) {
            console.error(e);
        }
    }

    async function buscarPedido(){
        try {
            const todosCliente = await promesaLeerArchivo(path);
            let arrayCliente = [];
            if (todosCliente.length === 0) {
                console.log('No hay clientes registrados');
            } else {
                if (todosCliente !== '') {
                    arrayCliente = todosCliente.split('\n').map(
                        valorActual => {
                            return JSON.parse(valorActual);
                        });
                    const respuestaSelecEliminarPedido = await promesaSeleccionarClienteParaCrearPedido(arrayCliente.map(
                        valorActual => {
                            return valorActual.nombreCliente;
                        }
                    ));
                    const clientes = arrayCliente.splice(arrayCliente.findIndex(
                        valorActual => {
                            if (valorActual.nombreCliente === respuestaSelecEliminarPedido.crearPedidoParaCliente) {
                                return valorActual;
                            }
                        }
                    ), 1);
                    const cliente = clientes[0];
                    const arrayPedido =  JSON.stringify(cliente.pedido);
                    //console.log('cliente', cliente);
                    console.log('Pedido', JSON.parse(arrayPedido));
                }
            }
            await menu();
        } catch (e) {
            console.error(e);
        }
    }

    async function actualizarPedido(){
        try{
            const todosCliente = await promesaLeerArchivo(path);
            //console.log('marcas',todosCliente);
            let arrayCliente = [];
            if (todosCliente.length === 0) {
                console.log('No hay clientes registrados');
            } else {
                if (todosCliente !== '') {
                    arrayCliente = todosCliente.split('\n').map(
                        valorActual => {
                            return JSON.parse(valorActual);
                        });
                    //console.log('arrayCliente',arrayCliente);

                    const respuestaSelecEliminarPedido = await promesaSeleccionarClienteParaCrearPedido(arrayCliente.map(
                        valorActual => {
                            return valorActual.nombreCliente;
                        }
                    ));
                    // console.log('respuestaSelecCrearPedido',respuestaSelecCrearPedido)
                    const clientes = arrayCliente.splice(arrayCliente.findIndex(
                        valorActual => {
                            //console.log('valorActual',valorActual)
                            if (valorActual.nombreCliente === respuestaSelecEliminarPedido.crearPedidoParaCliente) {
                                return valorActual;
                            }
                        }
                    ), 1);
                    await promesaEscribiCliente(actualizarRegistro(arrayCliente));
                    const cliente = clientes[0];
                    //console.log('modelos',JSON.stringify(cliente))
//                    console.log('modelos',JSON.stringify(cliente.modelos));
                    const arrayPedido =  JSON.stringify(cliente.pedido);
                    console.log('cliente ', cliente);
                    //console.log('arrayPedido', arrayPedido);

                    const menuEliminarPedido= await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'seleccionPedidoEliminar',
                                message: 'Ingrese el indice del pedido que desea actualizar: ',
                            }
                        ]);
                    const pedidoEliminar = await menuEliminarPedido;
                    //console.log('pedidoEliminar >>>> ',pedidoEliminar.seleccionModeloEliminar);

                    const eliminarPedidoDelArray = (indice, arreglo) => {
                        arreglo.splice(indice, 1);
                    }

                    const arrayArrayPedido = JSON.parse(arrayPedido);
                    //console.log('ELIMINAR', pedidoEliminar )
                    eliminarPedidoDelArray(pedidoEliminar.seleccionPedidoEliminar , arrayArrayPedido);
                    //console.log( 'arrayPedido',arrayArrayPedido );
                    //console.log('cliente',JSON.stringify(cliente))

                    //console.log('clientePedidoEliminado >>>> ',clientePedidoEliminado)
                    const respuestaModificarPedido = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'TipoPedido',
                                message: 'Didita el tipo de pedido(pantalones, camisetas, chompas):'
                            },
                            {
                                type: 'input',
                                name: 'cantidad',
                                message: 'Digita la cantidad del pedido:'
                            },
                            {
                                type: 'input',
                                name: 'fecha',
                                message: 'Digita la fecha de entrega:'
                            },
                            {
                                type: 'input',
                                name: 'trasnporte',
                                message: 'Necesita trasporte?(S/N):'
                            },
                            {
                                type: 'input',
                                name: 'descuento',
                                message: 'Tiene descuento?(S/N):'
                            }

                        ]);
                    // console.log('Nuevo Modelo: ', respuestaCrearModelo);
                    const booltrasnporte = (/S/i).test(respuestaModificarPedido.trasnporte);
                    const booldescuento = (/S/i).test(respuestaModificarPedido.descuento);
                    const respuestaModificarPedidoTypado = {
                        TipoPedido: respuestaModificarPedido.TipoPedido,
                        cantidad: respuestaModificarPedido.cantidad,
                        fecha: respuestaModificarPedido.fecha,
                        trasnporte: booltrasnporte,
                        descuento: booldescuento
                    }

                    const clientePedidoEliminado = {
                        nombreCliente: cliente.nombreCliente,
                        apellidoCliente: cliente.apellidoCliente,
                        correo: cliente.correo,
                        telefono: cliente.telefono,
                        direccion: cliente.direccion,
                        pedido: arrayArrayPedido
                    }
                    clientePedidoEliminado.pedido.push(respuestaModificarPedidoTypado);
                    console.log('modificado', JSON.stringify(clientePedidoEliminado))

                    const respuestaLeerArchivo = await promesaLeerArchivo(path);
                    if (respuestaLeerArchivo !== '') {
                        await promesaEscribiCliente(respuestaLeerArchivo + '\n' + JSON.stringify(clientePedidoEliminado));
                    } else {
                        await promesaEscribiCliente(JSON.stringify(clientePedidoEliminado));
                    }

                }
            }
            await menu();


        }
        catch (e) {
            console.error(e);
        }
    }

    async function elegirClienteParaPedido() {
        try {
            const cliente = await promesaLeerArchivo(path);
            console.log(cliente);
            let arrayCliente = [];
            if (cliente !== '') {
                arrayCliente = cliente.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
                //console.log('arrayCliente',arrayCliente);
            }
            if (arrayCliente.length === 0) {
                return 'No hay clientes registrados';
            } else {
                const respuestaSelecCliente = await promesaSeleccionarClienteParaCrearPedido(arrayCliente.map(
                    valorActual => {
                        return valorActual.nombreCliente;
                    }
                ));
                return respuestaSelecCliente;
                // console.log('respuestaSelecCliente',  respuestaSelecCliente)

            }
        } catch (e) {
            console.error(e);
        }
    }
    const promesaSeleccionarPedidoEliminar = (pedido) => {
        return inquirer
            .prompt({
                type: 'list',
                name: 'eliminarPedido',
                message: 'Seleccione el pedido al que desea eliminar:',
                choices: pedido,
            });
    }

}

main();