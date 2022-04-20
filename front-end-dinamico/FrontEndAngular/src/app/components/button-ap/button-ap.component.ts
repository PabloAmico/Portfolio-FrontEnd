import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button-ap',
  templateUrl: './button-ap.component.html',
  styleUrls: ['./button-ap.component.css']
})
export class ButtonAPComponent implements OnInit {

  constructor() { }
  ButtonAP:string = './assets/images/logo-ArgentinaPrograma.png';
  @Input() Link:string = "";
  ngOnInit(): void {
  }

}
