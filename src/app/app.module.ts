import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    InicioComponent,
    ReportesComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
