import { Component, Input, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { concat, debounceTime } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-form-update-contacto',
  templateUrl: './form-update-contacto.component.html',
  styleUrls: ['./form-update-contacto.component.css']
})
export class FormUpdateContactoComponent implements OnInit {

  public form:FormGroup;

  @Input() id_per:any;  //id de la persona.
  constructor(private datosPortfolio:PortfolioService) { 

    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required]),
      Id_Persona: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }
  save(event: Event) {
    const value = this.form.value;
    
    value.id = this.id_per;
    value.id_persona = 1;
    console.log(value);
    console.log(this.id_per);
    this.datosPortfolio.actualizarContacto(value).subscribe(data =>{
      
    });
    
  }

}
