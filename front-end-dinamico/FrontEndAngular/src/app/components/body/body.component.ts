import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 
  id:any;
  miPortfolio:any;
  miExperiencia:any;
  miEducacion:any;
  miCurso:any;
  miSkill:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {

    //utilizo esta funcion para obtener la ID de la persona, para luego pasarla al link
    this.datosPortfolio.obtenerDatosPersonales().subscribe(data =>{
    this.miPortfolio = data[0];
    this.miExperiencia=data;
    this.id = data[0].id;

      //obtengo los datos de la experiencia.
    this.datosPortfolio.obtenerDatosExperiencia(this.id).subscribe(data =>{
      this.miExperiencia = data;
    })

    //obtengo los datos de la educacion.
    this.datosPortfolio.obtenerDatosEducacion(this.id).subscribe(data =>{
      this.miEducacion = data;
      //console.log(this.miEducacion);
    })

    //obtengo los datos de los cursos.
    this.datosPortfolio.obtenerDatosCursos(this.id).subscribe(data =>{
      this.miCurso = data;
      //console.log(this.miCurso);

      //obtengo los datos de las skills.
      this.datosPortfolio.obtenerDatosSkills(this.id).subscribe(data=>{
        this.miSkill = data;
        //console.log(this.miSkill);
      })
    })
  });
  
}

}
