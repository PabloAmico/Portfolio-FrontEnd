import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';


@Component({
  selector: 'app-init-sesion',
  templateUrl: './init-sesion.component.html',
  styleUrls: ['./init-sesion.component.css']
})
export class InitSesionComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group(
      {

      }
    )
    
  }

  ngOnInit(): void {
  }

}
