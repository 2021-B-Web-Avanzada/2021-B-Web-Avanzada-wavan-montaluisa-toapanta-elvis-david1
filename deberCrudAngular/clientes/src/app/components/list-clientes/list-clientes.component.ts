import { Component, OnInit } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {
  clientes: any[] = [];

  constructor(private _clientesService: ClientesService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getClientes()
  }

  getClientes() {
    this._clientesService.getClientes().subscribe(data => {
      this.clientes = [];
      data.forEach((element: any) => {
        this.clientes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.clientes);
    });
  }

  eliminarClientes(id: string) {
    this._clientesService.eliminarClientes(id).then(() => {
      console.log('Cliente eliminado con exito');
      this.toastr.error('El cliente fue eliminado con exito', 'Registro eliminado!', {
        positionClass: 'toast-bottom-center'
      });
    }).catch(error => {
      console.log(error);
    })
  }

}
