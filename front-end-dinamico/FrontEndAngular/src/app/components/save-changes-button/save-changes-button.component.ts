import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-save-changes-button',
  templateUrl: './save-changes-button.component.html',
  styleUrls: ['./save-changes-button.component.css']
})
export class SaveChangesButtonComponent implements OnInit {

  constructor() { }

  Image:string = './assets/images/save_icon.png';
  @Input() Link:string = "";
  edicion:boolean = false;
  ngOnInit(): void {
  }

}

