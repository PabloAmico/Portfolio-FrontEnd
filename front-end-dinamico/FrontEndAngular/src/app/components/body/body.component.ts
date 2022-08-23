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
  miEducacion:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {

    //utilizo esta funcion para obtener la ID de la persona, para luego pasarla al link
    this.datosPortfolio.obtenerDatosPersonales().subscribe(data =>{
    this.miExperiencia=data;
    console.log(this.miExperiencia);
    this.id = data[0].id;

      //obtengo los datos de la experiencia.
    this.datosPortfolio.obtenerDatosExperiencia(this.id).subscribe(data =>{
      console.log("la id es " + this.miExperiencia[0].nombre_empresa);
      this.miExperiencia = data;
      console.log(this.miExperiencia);
      
    })

    this.datosPortfolio.obtenerDatosEducacion(this.id).subscribe(data =>{
      this.miEducacion = data;
    })
  });
  
}

}
