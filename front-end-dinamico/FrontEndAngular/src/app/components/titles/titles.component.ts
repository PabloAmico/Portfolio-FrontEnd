import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {

  constructor() { }

  @Input() Title:String = "";

  ngOnInit(): void {
  }

}
