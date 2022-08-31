import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  Banner:string = './assets/images/banner-def.png';

  miPortfolio:any;
  id:any;
  constructor(private datosPortfolio:PortfolioService) { }

  

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPersonales().subscribe(data =>{
      // console.log(data);
      this.miPortfolio=data[0];
      this.id = this.miPortfolio.id;
      //console.log(this.miPortfolio.nombre);
    });
  }
}
