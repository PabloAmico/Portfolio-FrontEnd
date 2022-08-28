import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {
  ImageCancel:string = './assets/images/delete-icon.png';
  @Input() id:any;
  @Input() path:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
  }

  delete(event:any){
    console.log(this.path);
    this.datosPortfolio.deleteDato(this.id,this.path).subscribe(data =>{
      
    });
  }


}
