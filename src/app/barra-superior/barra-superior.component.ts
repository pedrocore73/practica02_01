import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  logueado = false;
  mostrarMensaje = false;
  mensaje: String;
  subscripMensaje: Subscription;
  t: any;

  constructor(private router: Router,
              private clientesService: ClientesService) { }

  ngOnInit() {
    this.subscripMensaje = this.clientesService.isMensajeIn
                                    .subscribe((data: any)=>{
                                      window.clearTimeout(this.t);
                                      this.mostrarMensaje = false;
                                      if(data.mensaje !== ''){
                                        this.mostrarMensaje = true;
                                        this.mensaje = data.mensaje;
                                      }
                                      this.t = setTimeout(()=>{
                                        this.mostrarMensaje = false;
                                      }, 5000)
                                    },(error: any)=>{
                                      console.log(error);
                                    })
  }

  iniciarSesion() {
    this.logueado = true;
  }

  cerrarSesion() {
    this.logueado = false;
    this.router.navigate(['/']);
  }

}
