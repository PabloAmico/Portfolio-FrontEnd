import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-ap',
  templateUrl: './button-ap.component.html',
  styleUrls: ['./button-ap.component.css']
})
export class ButtonAPComponent implements OnInit {

  constructor() { }
  ButtonAP:string = './assets/images/logo-ArgentinaPrograma.png';
  Link:string = "https://argentinaprograma.inti.gob.ar/";
  ngOnInit(): void {
  }

}
