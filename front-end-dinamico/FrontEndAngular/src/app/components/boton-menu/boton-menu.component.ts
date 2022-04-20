import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton-menu',
  templateUrl: './boton-menu.component.html',
  styleUrls: ['./boton-menu.component.css']
})
export class BotonMenuComponent implements OnInit {

  constructor() { }
  @Input() Link:string = "";
  @Input() Image:string = "";
  ngOnInit(): void {
  }

}
