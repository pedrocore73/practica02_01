import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  formCliente: FormGroup;
  clientes: any;

  constructor(private ff: FormBuilder,
              private clientesService: ClientesService) { }

  ngOnInit() {
    this.formCliente = this.ff.group({
      nombre: '',
      cif: ''
    })
  }

  nuevoCliente() {
    const cliente = {
      nombre: this.formCliente.get('nombre').value,
      cif: this.formCliente.get('cif').value,
      creadoAt: new Date()
    }
    this.clientesService.crearCliente(cliente);
    this.formCliente.reset();
    this.clientes = this.clientesService.getClientes();
  }

}
