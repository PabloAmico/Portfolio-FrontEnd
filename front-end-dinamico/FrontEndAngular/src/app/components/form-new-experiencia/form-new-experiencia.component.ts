import { Component, Input, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { concat, debounceTime } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-form-new-experiencia',
  templateUrl: './form-new-experiencia.component.html',
  styleUrls: ['./form-new-experiencia.component.css']
})
export class FormNewExperienciaComponent implements OnInit {

  public form:FormGroup;

  @Input() id_per:any;  //id de la persona.
  constructor(private datosPortfolio:PortfolioService) {
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombre_empresa: new FormControl('', [Validators.required]),
      fecha_inicio: new FormControl('', [Validators.required]),
      fecha_fin: new FormControl('', [Validators.email]),
      descripcion: new FormControl('', [Validators.maxLength(200)]),
      url_imagen: new FormControl('', [Validators.required]),
      Id_Persona: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  save(event: Event) {
    //event.preventDefault();
    const value = this.form.value;
    
    value.id = 1;
    value.id_persona = this.id_per;
    console.log(value);
    console.log(this.id_per);
    //this.datosPortfolio.actualizarDatosExperienciaSinFoto(this.id_per,value.id,value.nombre_empresa,value.descripcion,value.fecha_inicio, value.fecha_fin);
    this.datosPortfolio.nuevaExperienciaLaboral(value,this.id_per).subscribe(data =>{
      
    });
    
  }

}
