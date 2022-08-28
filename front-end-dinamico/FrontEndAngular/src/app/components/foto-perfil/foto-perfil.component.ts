import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.css']
})
export class FotoPerfilComponent implements OnInit {

  //atributos para ver y ocultar los botones de carga y actualizacion.
  mostrar_edicion_sobremi = false;
  edicion_sobremi = false;
  mostrar_nueva_sobremi = false;
  nueva_sobremi = false;


  mostrar_edicion_rol = false;
  edicion_rol = false;
  mostrar_nueva_rol = false;
  nueva_rol = false;



  miPortfolio:any;
  miRoles:any;
  constructor(private datosPortfolio:PortfolioService) { }
  id:number = 0;
  mostrar = false;
  edicion = false;
  url:string = './assets/images/foto-escalada.png';
  Nombre:string = 'Amico Pablo Andres';
  Puesto_1:string = 'Full Stack Developer Jr.';
  Puesto_2:string = 'Game Developer';
  Localidad:string = 'Santa Fe, Argentina';
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPersonales().subscribe(data =>{
      // console.log(data);
      this.miPortfolio=data[0];
      this.id = this.miPortfolio.id;
      //console.log(this.miPortfolio.nombre);
      this.datosPortfolio.obtenerDatosRoles(this.id).subscribe(data =>{
        this.miRoles = data;
        console.log(this.miRoles);
      })
    });

   
    this.revisar();
  }

  modo_edicion(event:any){
    
    console.log(this.id);
    if(!this.edicion){
      console.log("edicion true");
      this.edicion = true;
    }else{
      console.log("edicion false");
      this.edicion = false;
    }
    this.revisar();
  }

  revisar(){
    if(this.id < 0 || !this.edicion){
      this.mostrar = false;
    }else{
      if(this.edicion){      
        this.mostrar = true;
      }
    }
  }


  modo_edicion_sobremi(event:any){
    if(!this.edicion_sobremi){
  
      this.edicion_sobremi = true;
  
    }else{
     
      this.edicion_sobremi = false;
    }
    this.revisar_sobremi();
    this.revisar_sobremi();
  }
  
  revisar_sobremi(){
    if(this.id < 0 || !this.edicion_sobremi){
      this.mostrar_edicion_sobremi = false;
    }else{
      if(this.edicion_sobremi){      
        this.mostrar_edicion_sobremi = true;
      }
    }
  }
  
  modo_nueva_sobremi(event:any){
    console.log("entre");
    if(!this.nueva_sobremi){
      this.nueva_sobremi = true;
    }else{
      this.nueva_sobremi = false;
    }
    this.revisar_nueva_sobremi();
    this.revisar_sobremi();
  }
  
  revisar_nueva_sobremi(){
    if(this.id < 0 || !this.nueva_sobremi){
      this.mostrar_nueva_sobremi = false;
    }else{
      if(this.nueva_sobremi){      
        this.mostrar_nueva_sobremi = true;
      }
    }
  }


  modo_edicion_rol(event:any){
    if(!this.edicion_rol){
  
      this.edicion_rol = true;
  
    }else{
     
      this.edicion_rol = false;
    }
    this.revisar_rol();
    this.revisar_rol();
  }
  
  revisar_rol(){
    if(this.id < 0 || !this.edicion_rol){
      this.mostrar_edicion_rol = false;
    }else{
      if(this.edicion_rol){      
        this.mostrar_edicion_rol = true;
      }
    }
  }
  
  modo_nueva_rol(event:any){
    console.log("entre");
    if(!this.nueva_rol){
      this.nueva_rol = true;
    }else{
      this.nueva_rol = false;
    }
    this.revisar_nueva_rol();
    this.revisar_rol();
  }
  
  revisar_nueva_rol(){
    if(this.id < 0 || !this.nueva_rol){
      this.mostrar_nueva_rol = false;
    }else{
      if(this.nueva_rol){      
        this.mostrar_nueva_rol = true;
      }
    }
  }
}
