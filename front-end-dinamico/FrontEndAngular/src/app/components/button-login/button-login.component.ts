import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.css']
})
export class ButtonLoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    if(this.portfolio){
      this.nombre="Logout";
    }else{
      this.nombre="Login";
    }
  }

  nombre:string="";

  @Input() portfolio:boolean = false;

  onClick(){
    if(this.portfolio){
      this.userService.logout()
      .then(()=>{
        this.router.navigate(['/vista-previa'])
      })
      .catch(error => console.log(error));
    }else{
      this.router.navigate(['/iniciar-sesion'])
    }
  }
}
