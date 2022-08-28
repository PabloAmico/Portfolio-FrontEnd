import { Component, Input, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { concat, debounceTime } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-form-update-sobremi',
  templateUrl: './form-update-sobremi.component.html',
  styleUrls: ['./form-update-sobremi.component.css']
})
export class FormUpdateSobremiComponent implements OnInit {

  public form:FormGroup;

 
  @Input() id_per:any;  //id de la persona.

  constructor(private datosPortfolio:PortfolioService) { 

  this.form = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required]),
    fechaNac: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required]),
    imagen_perfil: new FormControl('', [Validators.required]),
    imagen_banner: new FormControl('', [Validators.required]),
    sobre_mi: new FormControl('', [Validators.required]),
  });
}

ngOnInit(): void {
}

save(event: Event) {
  
  const value = this.form.value;
  
  value.id = this.id_per;
  console.log(value);
  console.log(this.id_per);
  
  this.datosPortfolio.actualizarDatosSobreMi(value).subscribe(data =>{
    
  });
  
}

}
