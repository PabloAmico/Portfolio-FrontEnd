import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  constructor() { }
  ImageCancel:string = './assets/images/cancel_icon.png';
  ImageEdit:string = './assets/images/edit_icon.png';
  Image:string = this.ImageEdit;
  @Input() buttonConfig: any;
  edicion:boolean = false;
  ngOnInit(): void {
    
  }

  change_edit(event:any){
    if(this.edicion){
      this.edicion = false;
      this.Image = this.ImageCancel;
    }else{
      this.edicion = true;
      this.Image = this.ImageEdit;
    }
  }

}
