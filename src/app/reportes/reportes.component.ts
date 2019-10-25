import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../servicios/reportes.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  reportes: any;
  activado: string;

  constructor(private reportesService: ReportesService) { }

  ngOnInit() {
    this.loadReportesVentas();
  }

  loadReportesVentas() {
    this.activado = 'ventas';
    const reportes = this.reportesService.getReportes();
    this.reportes = reportes.ventas;
  }

  loadReportesCompras() {
    this.activado = 'compras';
    const reportes = this.reportesService.getReportes();
    this.reportes = reportes.compras;
  }

}
