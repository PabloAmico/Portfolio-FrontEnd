import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-mail',
  templateUrl: './button-mail.component.html',
  styleUrls: ['./button-mail.component.css']
})
export class ButtonMailComponent implements OnInit {

  constructor() { }
  ButtonMail:string = './assets/images/logo-correo.png';
  ngOnInit(): void {
  }

}
