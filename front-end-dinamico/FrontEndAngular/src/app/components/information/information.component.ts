import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor() { }

 @Input() portfolio:boolean =true;

  @Input() Image:string = "";
  @Input() Title:string = "";
  @Input() Description:string = "";
  @Input() Time:string = "";

  @Input() id:any;
  @Input() name:any;


  ngOnInit(): void {
  }

}
