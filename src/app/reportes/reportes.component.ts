import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../servicios/reportes.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  reportes: any;

  constructor(private reportesService: ReportesService) { }

  ngOnInit() {

  }

  loadReportesVentas() {
    const reportes = this.reportesService.getReportes();
    this.reportes = reportes.ventas;
  }

  loadReportesCompras() {
    const reportes = this.reportesService.getReportes();
    this.reportes = reportes.compras;
  }

}
