import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://localhost:8080/api";
  constructor(private http:HttpClient) { }
  portfolio:any;
  id:any = null;

  obtenerDatosPersonales():Observable<any>{
    
    console.log("El servicio portfolio esta corriendo");
    return this.http.get(this.url + "/ver/personas");
  }

  obtenerDatosExperiencia(id:any):Observable<any>{
    this.portfolio = this.http.get(this.url + "/ver/personas");
    console.log("la id es " +this.portfolio[0]);
    //console.log("la id es " + this.id.id);
    return this.http.get(this.url + "/ver/experiencia/1");
  }
}
