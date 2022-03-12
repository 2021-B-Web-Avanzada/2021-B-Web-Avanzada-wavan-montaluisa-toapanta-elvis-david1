import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private firestore: AngularFirestore) { }

  agregarClientes(clientes: any): Promise<any> {
    return this.firestore.collection('clientes').add(clientes);
  }

  getClientes(): Observable<any> {
    return this.firestore.collection('clientes', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminarClientes(id: string): Promise<any> {
    return this.firestore.collection('clientes').doc(id).delete();
  }

  getCliente(id: string): Observable<any> {
    return this.firestore.collection('clientes').doc(id).snapshotChanges();
  }

  actualizarClientes(id: string, data:any): Promise<any> {
    return this.firestore.collection('clientes').doc(id).update(data);
  }

}