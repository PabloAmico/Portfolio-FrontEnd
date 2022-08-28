import { Component, Input, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { concat, debounceTime } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-form-update-curso',
  templateUrl: './form-update-curso.component.html',
  styleUrls: ['./form-update-curso.component.css']
})
export class FormUpdateCursoComponent implements OnInit {

  public form:FormGroup;

  @Input() id_obj: any; //id del objeto a actualizar.
  @Input() id_per:any;  //id de la persona.

  constructor(private datosPortfolio:PortfolioService) { 

  this.form = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    fecha_inicio: new FormControl('', [Validators.email]),
    fecha_fin: new FormControl('', [Validators.maxLength(200)]),
    url_imagen: new FormControl('', [Validators.required]),
    Id_Persona: new FormControl('', [Validators.required]),
  });
}

ngOnInit(): void {
}

save(event: Event) {
  const value = this.form.value;
  
  value.id = this.id_obj;
  value.id_persona = this.id_per;
  console.log(value);
  console.log(this.id_per);
  
  this.datosPortfolio.actualizarDatosCursos(value,this.id_per).subscribe(data =>{
    
  });
  
}

}
