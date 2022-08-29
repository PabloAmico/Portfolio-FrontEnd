import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitSesionComponent } from './components/init-sesion/init-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
  {path: 'portfolio',
  component:PortfolioComponent, 
  ...canActivate(()=>redirectUnauthorizedTo(['/iniciar-sesion']))},
  {path: 'iniciar-sesion',component:InitSesionComponent},
  {path: '', redirectTo:'iniciar-sesion',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
