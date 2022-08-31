import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio:any;
  id:any;
  constructor(private datosPortfolio:PortfolioService) { }

  @Input() portfolio:boolean = true;

 
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPersonales().subscribe(data =>{
      // console.log(data);
      this.miPortfolio=data[0];
      this.id = this.miPortfolio.id;
      //console.log(this.miPortfolio.nombre);
    });
  }

}
