import { Component, OnInit } from '@angular/core';
// import { debug } from 'console';
import { SaveChangesButtonComponent } from '../save-changes-button/save-changes-button.component';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.css']
})
export class FotoPerfilComponent implements OnInit {

  
  constructor() { }
  id:number = 1;
  mostrar = false;
  edicion = true;
  url:string = './assets/images/foto-escalada.png';
  Nombre:string = 'Amico Pablo Andres';
  Puesto_1:string = 'Full Stack Developer Jr.';
  Puesto_2:string = 'Game Developer';
  Localidad:string = 'Santa Fe, Argentina';
  ngOnInit(): void {
    this.revisar();
  }

  modo_edicion(event:any){
    
    
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
