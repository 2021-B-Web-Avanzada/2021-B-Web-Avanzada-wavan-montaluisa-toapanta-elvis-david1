import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientesService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.css']
})
export class CreateClientesComponent implements OnInit {
  createClientes: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Cliente';

  constructor(private fb: FormBuilder,
    private _clientesService: ClientesService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.createClientes = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarClientes() {
    this.submitted = true;

    if (this.createClientes.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarClientes();
    } else {
      this.editarClientes(this.id);
    }

  }

  agregarClientes() {
    const clientes: any = {
      nombre: this.createClientes.value.nombre,
      apellido: this.createClientes.value.apellido,
      direccion: this.createClientes.value.direccion,
      correo: this.createClientes.value.correo,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this._clientesService.agregarClientes(clientes).then(() => {
      this.toastr.success('El cliente fue registrado con exito!', 'Cliente Registrado', {
        positionClass: 'toast-bottom-center'
      });
      this.loading = false;
      this.router.navigate(['/list-clientes']);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  editarClientes(id: string) {

    const cliente: any = {
      nombre: this.createClientes.value.nombre,
      apellido: this.createClientes.value.apellido,
      direccion: this.createClientes.value.direccion,
      correo: this.createClientes.value.correo,      
      fechaActualizacion: new Date()
    }

    this.loading = true;

    this._clientesService.actualizarClientes(id, cliente).then(() => {
      this.loading = false;
      this.toastr.info('El cliente fue modificado con exito', 'Cliente modificado', {
        positionClass: 'toast-bottom-center'
      })
      this.router.navigate(['/list-clientes']);
    })
  }


  esEditar() {
    this.titulo = 'Agregar Cliente'
    if (this.id !== null) {
      this.loading = true;
      this._clientesService.getCliente(this.id).subscribe(data => {
        this.loading = false;
        this.createClientes.setValue({
          nombre: data.payload.data()['nombre'],
          apellido: data.payload.data()['apellido'],
          direccion: data.payload.data()['direccion'],
          correo: data.payload.data()['correo'],
        })
      })
    }
  }

}
