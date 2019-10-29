import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes = [];
  mensaje: String;
  private mensajeIn = new BehaviorSubject<any>({mensaje: ''});

  get isMensajeIn() {
    return this.mensajeIn.asObservable();
  }

  constructor() { }

  crearCliente (cliente) {
    this.clientes.push(cliente);
    this.mensajeIn.next({mensaje: 'Cliente creado correctamente'});
  }

  getClientes() {
    return this.clientes;
  }


}
