import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  constructor() { }

  @Input() percentage:string = "";
  @Input() name:string = "";

  

  ngOnInit(): void {
  }

}
