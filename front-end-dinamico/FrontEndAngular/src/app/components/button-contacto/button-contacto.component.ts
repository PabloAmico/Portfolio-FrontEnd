import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-contacto',
  templateUrl: './button-contacto.component.html',
  styleUrls: ['./button-contacto.component.css']
})
export class ButtonContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Input($event:any){
    window.scroll({
      top:10000
    })
    console.log("PRESIONEEE");
  }
}
