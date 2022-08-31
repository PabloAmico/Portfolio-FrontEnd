import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  @Input() email:any = "email";
  @Input() telefono:any = "telefono";

  ngOnInit(): void {
  }

}
