import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //atributos para ver y ocultar los botones de carga y actualizacion.
  mostrar_edicion_experiencia = false;
  edicion_experiencia = false;
  mostrar_nueva_experiencia = false;
  nueva_experiencia = false;

  mostrar_edicion_educacion = false;
  edicion_educacion = false;
  mostrar_nueva_educacion = false;
  nueva_educacion = false;


  mostrar_edicion_curso = false;
  edicion_curso = false;
  mostrar_nueva_curso = false;
  nueva_curso = false;


  mostrar_edicion_skills = false;
  edicion_skills = false;
  mostrar_nueva_skills = false;
  nueva_skills = false;


  mostrar_edicion_contacto = false;
  edicion_contacto = false;

  id:any;
  miPortfolio:any;
  miExperiencia:any;
  miEducacion:any;
  miCurso:any;
  miSkill:any;
  miContacto:any;
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

    
    })
      //obtengo los datos de las skills.
      this.datosPortfolio.obtenerDatosSkills(this.id).subscribe(data=>{
        this.miSkill = data;
        //console.log(this.miSkill);
      })

      this.datosPortfolio.obtenerDatosContactos(this.id).subscribe(data=>{
        this.miContacto = data[0];
        console.log(this.miContacto);
      })
  });
  
}

modo_edicion_experiencia(event:any){
  if(!this.edicion_experiencia){

    this.edicion_experiencia = true;

  }else{
   
    this.edicion_experiencia = false;
  }
  this.revisar_experiencia();
  this.revisar_nueva_experiencia();
}

revisar_experiencia(){
  if(this.id < 0 || !this.edicion_experiencia){
    this.mostrar_edicion_experiencia = false;
  }else{
    if(this.edicion_experiencia){      
      this.mostrar_edicion_experiencia = true;
    }
  }
}

modo_nueva_experiencia(event:any){
  console.log("entre");
  if(!this.nueva_experiencia){
    this.nueva_experiencia = true;
  }else{
    this.nueva_experiencia = false;
  }
  this.revisar_nueva_experiencia();
  this.revisar_experiencia();
}

revisar_nueva_experiencia(){
  if(this.id < 0 || !this.nueva_experiencia){
    this.mostrar_nueva_experiencia = false;
  }else{
    if(this.nueva_experiencia){      
      this.mostrar_nueva_experiencia = true;
    }
  }
}


modo_edicion_educacion(event:any){
  if(!this.edicion_educacion){

    this.edicion_educacion = true;

  }else{
   
    this.edicion_educacion = false;
  }
  this.revisar_educacion();
  this.revisar_educacion();
}

revisar_educacion(){
  if(this.id < 0 || !this.edicion_educacion){
    this.mostrar_edicion_educacion = false;
  }else{
    if(this.edicion_educacion){      
      this.mostrar_edicion_educacion = true;
    }
  }
}

modo_nueva_educacion(event:any){
  console.log("entre");
  if(!this.nueva_educacion){
    this.nueva_educacion = true;
  }else{
    this.nueva_educacion = false;
  }
  this.revisar_nueva_educacion();
  this.revisar_educacion();
}

revisar_nueva_educacion(){
  if(this.id < 0 || !this.nueva_educacion){
    this.mostrar_nueva_educacion = false;
  }else{
    if(this.nueva_educacion){      
      this.mostrar_nueva_educacion = true;
    }
  }
}


modo_edicion_curso(event:any){
  if(!this.edicion_curso){

    this.edicion_curso = true;

  }else{
   
    this.edicion_curso = false;
  }
  this.revisar_curso();
  this.revisar_curso();
}

revisar_curso(){
  if(this.id < 0 || !this.edicion_curso){
    this.mostrar_edicion_curso = false;
  }else{
    if(this.edicion_curso){      
      this.mostrar_edicion_curso = true;
    }
  }
}

modo_nueva_curso(event:any){
  console.log("entre");
  if(!this.nueva_curso){
    this.nueva_curso = true;
  }else{
    this.nueva_curso = false;
  }
  this.revisar_nueva_curso();
  this.revisar_curso();
}

revisar_nueva_curso(){
  if(this.id < 0 || !this.nueva_curso){
    this.mostrar_nueva_curso = false;
  }else{
    if(this.nueva_curso){      
      this.mostrar_nueva_curso = true;
    }
  }
}

modo_edicion_skills(event:any){
  if(!this.edicion_skills){

    this.edicion_skills = true;

  }else{
   
    this.edicion_skills = false;
  }
  this.revisar_skills();
  this.revisar_skills();
}

revisar_skills(){
  if(this.id < 0 || !this.edicion_skills){
    this.mostrar_edicion_skills = false;
  }else{
    if(this.edicion_skills){      
      this.mostrar_edicion_skills = true;
    }
  }
}

modo_nueva_skills(event:any){
  console.log("entre");
  if(!this.nueva_skills){
    this.nueva_skills = true;
  }else{
    this.nueva_skills = false;
  }
  this.revisar_nueva_skills();
  this.revisar_skills();
}

revisar_nueva_skills(){
  if(this.id < 0 || !this.nueva_skills){
    this.mostrar_nueva_skills = false;
  }else{
    if(this.nueva_skills){      
      this.mostrar_nueva_skills = true;
    }
  }
}


modo_edicion_contacto(event:any){
  if(!this.edicion_contacto){

    this.edicion_contacto = true;

  }else{
   
    this.edicion_contacto = false;
  }
  this.revisar_contacto();
  
}

revisar_contacto(){
  if(this.id < 0 || !this.edicion_contacto){
    this.mostrar_edicion_contacto = false;
  }else{
    if(this.edicion_contacto){      
      this.mostrar_edicion_contacto = true;
    }
  }
}
}


