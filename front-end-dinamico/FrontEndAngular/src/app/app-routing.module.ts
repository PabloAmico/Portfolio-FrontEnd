import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitSesionComponent } from './components/init-sesion/init-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { VistaPreviaComponent } from './components/vista-previa/vista-previa.component';

const routes: Routes = [
  {path: 'portfolio',
  component:PortfolioComponent, 
  ...canActivate(() => redirectUnauthorizedTo(['/iniciar-sesion']))
  },
  {path: 'iniciar-sesion',component:InitSesionComponent},
  {path: 'vista-previa',  component:VistaPreviaComponent},
  {path: '', redirectTo:'vista-previa',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
