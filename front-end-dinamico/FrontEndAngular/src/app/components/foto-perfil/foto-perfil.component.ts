import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.css']
})
export class FotoPerfilComponent implements OnInit {

  constructor() { }

  url:string = './assets/images/foto-escalada.png';
  Nombre:string = 'Amico Pablo Andres';
  Puesto_1:string = 'Full Stack Developer Jr.';
  Puesto_2:string = 'Game Developer';
  Localidad:string = 'Santa Fe, Argentina';
  ngOnInit(): void {
  }

}
