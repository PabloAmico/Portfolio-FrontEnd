import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-linkedin',
  templateUrl: './button-linkedin.component.html',
  styleUrls: ['./button-linkedin.component.css']
})
export class ButtonLinkedinComponent implements OnInit {

  constructor() { }
  ButtonLinkedin:string = './assets/images/logo-linkedin.png';
  Link:string = "https://www.linkedin.com/in/pablo-amico-5175bb21a/";
  ngOnInit(): void {
  }

}
