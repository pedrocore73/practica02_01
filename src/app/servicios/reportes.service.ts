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

  constructor() { }

  getReportesVentas () {
    return this.reportesVentas;
  }

}
