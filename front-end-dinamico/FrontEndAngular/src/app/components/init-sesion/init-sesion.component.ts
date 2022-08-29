import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-init-sesion',
  templateUrl: './init-sesion.component.html',
  styleUrls: ['./init-sesion.component.css']
})
export class InitSesionComponent implements OnInit {
  form:FormGroup;
  constructor(private userService:UserService,
              private router:Router) { 
    this.form = new FormGroup(
      {
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
      }
    )
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.login(this.form.value)
    .then(response =>{
      console.log(response);
      this.router.navigate(['/portfolio']);
    })
    .catch(error => console.log(error));
   
  }
}
