import { Component, Input, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { concat, debounceTime } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-form-update-skills',
  templateUrl: './form-update-skills.component.html',
  styleUrls: ['./form-update-skills.component.css']
})
export class FormUpdateSkillsComponent implements OnInit {

  public form:FormGroup;

  @Input() id_obj: any; //id del objeto a actualizar.
  @Input() id_per:any;  //id de la persona.

  constructor(private datosPortfolio:PortfolioService) { 

  this.form = new FormGroup({
    id: new FormControl('', [Validators.required]),
      nombre_tecnologia: new FormControl('', [Validators.required]),
      habilidad_tecnologica: new FormControl('', [Validators.required]),
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
  
  this.datosPortfolio.actualizarDatosSkills(value,this.id_per).subscribe(data =>{
    
  });
  
}

}
