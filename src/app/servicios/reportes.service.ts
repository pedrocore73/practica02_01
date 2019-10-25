import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  reportesVentas = [
    {mes: 'Enero', importe: 3000},
    {mes: 'Febrero', importe: 2000},
    {mes: 'Marzo', importe: 3500}
  ];

  reportesCompras = [
    {mes: 'Enero', importe: 1000},
    {mes: 'Febrero', importe: 1500},
    {mes: 'Marzo', importe: 2000}
  ];

  constructor() { }

  getReportes () {
    const reportes = {
      ventas: this.reportesVentas,
      compras: this.reportesCompras
    }
    return reportes;
  }

}
