import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  logueado = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion() {
    this.logueado = true;
  }

  cerrarSesion() {
    this.logueado = false;
    this.router.navigate(['/']);
  }

}
