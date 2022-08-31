import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  //Authorization: 'my-auth-token'
  })
};

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
    //this.portfolio = this.http.get(this.url + "/ver/personas");
    return this.http.get(this.url + "/ver/experiencia/" + id);
  }

  obtenerDatosEducacion(id:any):Observable<any>{
    return this.http.get(this.url + "/ver/educacion/" + id);
  }

  obtenerDatosCursos(id:any):Observable<any>{
    return this.http.get(this.url + "/ver/cursos/" + id);
  }

  obtenerDatosSkills(id:any):Observable<any>{
    return this.http.get(this.url + "/ver/skills/" + id);
  }

  obtenerDatosRoles(id:any):Observable<any>{
    return this.http.get(this.url + "/ver/rol/" + id);
  }

  obtenerDatosContactos(id:any):Observable<any>{
    return this.http.get(this.url + "/ver/contacto/" + id);
  }

  /*actualizarDatosExperienciaSinFoto(id_person:any,id_obj:any,nombre:any,descripcion:any,fecha_inicio:any,fecha_fin:any){
    this.http.get(this.url + "/actualizar/experiencia/sinfoto/"+id_person+"/"+id_obj+"/"+nombre+"/"+descripcion+"/"+fecha_inicio+"/"+fecha_fin);
  }*/

  actualizarDatosExperiencia(obj:any, id:any):Observable<any>{
    console.log(obj);
    return this.http.post(this.url+"/actualizar/experiencia/"+id,obj, httpOptions);
  } 

  nuevaExperienciaLaboral(obj:any, id:any):Observable<any>{
    return this.http.post(this.url+"/new/experiencia/"+id,obj, httpOptions);
  }

  actualizarDatosEducacion(obj:any, id:any):Observable<any>{
    console.log(obj);
    return this.http.post(this.url+"/actualizar/educacion/"+id,obj, httpOptions);
  } 

  nuevaEducacion(obj:any, id:any):Observable<any>{
    return this.http.post(this.url+"/new/educacion/"+id,obj, httpOptions);
  }

  actualizarDatosCursos(obj:any, id:any):Observable<any>{
    console.log(obj);
    return this.http.post(this.url+"/actualizar/curso/"+id,obj, httpOptions);
  } 

  nuevoCurso(obj:any, id:any):Observable<any>{
    return this.http.post(this.url+"/new/cursos/"+id,obj, httpOptions);
  }

  actualizarDatosSkills(obj:any, id:any):Observable<any>{
    console.log(this.url+"/actualizar/experiencia/"+id);
    console.log(obj);
    return this.http.post(this.url+"/actualizar/skills/"+id,obj, httpOptions);
  } 

  nuevaSkills(obj:any, id:any):Observable<any>{
    return this.http.post(this.url+"/new/skills/"+id,obj, httpOptions);
  }


  actualizarDatosSobreMi(obj:any):Observable<any>{
    return this.http.post(this.url+"/actualizar/persona/sobremi",obj, httpOptions);
  }


  actualizarDatosRol(obj:any, id:any):Observable<any>{
    console.log(obj);
    return this.http.post(this.url+"/actualizar/rol/"+id,obj, httpOptions);
  } 

  nuevoRol(obj:any, id:any):Observable<any>{
    return this.http.post(this.url+"/new/rol/"+id,obj, httpOptions);
  }

  deleteDato(id:any, path:string):Observable<any>{
    return this.http.delete(this.url+"/delete/"+path+"/"+id, httpOptions);
  }

  nuevaImagenPerfil_Banner(obj:any, path:any):Observable<any>{

    return this.http.post(this.url+"/actualizar/persona/"+path,obj, httpOptions);
  }

  nuevaImagenBody(obj:any,path:any,):Observable<any>{
    return this.http.post(this.url+"/actualizar/"+path+"/imagen",obj, httpOptions);
  }

  actualizarContacto(obj:any ):Observable<any>{
    return this.http.post(this.url+"/actualizar/contacto/",obj, httpOptions);
  }
}
