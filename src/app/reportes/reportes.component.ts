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
    this.reportesService.getReportes()
                .subscribe((res: any)=>{
                  this.reportes = res.reportesVentas;
                },(error: any)=>{
                  console.log(error);
                })
  }

  loadReportesCompras() {
    this.activado = 'compras';
    this.reportesService.getReportes()
                .subscribe((res: any)=>{
                  this.reportes = res.reportesCompras;
                },(error: any)=>{
                  console.log(error);
                })
  }

}
