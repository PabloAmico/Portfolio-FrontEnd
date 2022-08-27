import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.css']
})
export class FotoPerfilComponent implements OnInit {

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
}
