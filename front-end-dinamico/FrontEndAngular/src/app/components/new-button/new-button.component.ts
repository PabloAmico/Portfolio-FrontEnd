import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-button',
  templateUrl: './new-button.component.html',
  styleUrls: ['./new-button.component.css']
})
export class NewButtonComponent implements OnInit {

  constructor() { }

  ImageCancel:string = './assets/images/cancel_icon.png';
  ImageEdit:string = './assets/images/add_icon.png';
  Image:string = this.ImageEdit;
  @Input() buttonConfig: any;
  new:boolean = true;
  ngOnInit(): void {
    
  }

  change_new(event:any){
    if(this.new){
      this.new = false;
      this.Image = this.ImageCancel;
    }else{
      this.new = true;
      this.Image = this.ImageEdit;
    }
  }

}
