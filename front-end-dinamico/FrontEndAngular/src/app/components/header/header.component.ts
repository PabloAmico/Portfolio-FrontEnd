import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
      /*this.datosPortfolio.obtenerDatosPersonales().subscribe(data =>{
      // console.log(data);
      this.miPortfolio=data;
      //console.log(this.miPortfolio);
      this.id = this.miPortfolio.id;
    });
    this.datosPortfolio.obtenerDatosExperiencia(this.id).subscribe(data =>{
      this.miPortfolio = data[0];
      console.log(this.miPortfolio);
    })*/
  }

}
