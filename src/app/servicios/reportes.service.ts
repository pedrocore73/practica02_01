import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {


  constructor(private http: HttpClient) { }

  getReportes () {
    return this.http.get('http://localhost:3000/reportes').pipe(
      map((resp: any)=>{
        return resp;
      })
    )
  }

}
