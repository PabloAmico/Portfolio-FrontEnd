import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 
  id:any;
  miExperiencia:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPersonales().subscribe(data =>{
    // console.log(data);
    this.miExperiencia=data;
    //console.log(this.miPortfolio);
    this.id = this.miExperiencia.id;
  });
  this.datosPortfolio.obtenerDatosExperiencia(this.id).subscribe(data =>{
    this.miExperiencia = data[0];
    console.log(this.miExperiencia);
  })
}

}
