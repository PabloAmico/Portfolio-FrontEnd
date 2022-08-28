import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonAPComponent } from './components/button-ap/button-ap.component';

import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { BannerComponent } from './components/banner/banner.component';
import { FotoPerfilComponent } from './components/foto-perfil/foto-perfil.component';
import { BotonMenuComponent } from './components/boton-menu/boton-menu.component';
import { BodyComponent } from './components/body/body.component';
import { TitlesComponent } from './components/titles/titles.component';
import { InformationComponent } from './components/information/information.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { BarSkillsComponent } from './components/bar-skills/bar-skills.component';
import { InitSesionComponent } from './components/init-sesion/init-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SaveChangesButtonComponent } from './components/save-changes-button/save-changes-button.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { FormExperienciaComponent } from './components/form-experiencia/form-experiencia.component';
import { ReloadDirective } from './directives/reload.directive';
import { FormNewExperienciaComponent } from './components/form-new-experiencia/form-new-experiencia.component';
import { NewButtonComponent } from './components/new-button/new-button.component';
import { FormUpdateEducacionComponent } from './components/form-update-educacion/form-update-educacion.component';
import { FormNewEducacionComponent } from './components/form-new-educacion/form-new-educacion.component';
import { FormNewCursoComponent } from './components/form-new-curso/form-new-curso.component';
import { FormUpdateCursoComponent } from './components/form-update-curso/form-update-curso.component';
import { FormUpdateSkillsComponent } from './components/form-update-skills/form-update-skills.component';
import { FormNewSkillsComponent } from './components/form-new-skills/form-new-skills.component';
import { FormUpdateSobremiComponent } from './components/form-update-sobremi/form-update-sobremi.component';
import { FormUpdateRolComponent } from './components/form-update-rol/form-update-rol.component';
import { FormNewRolComponent } from './components/form-new-rol/form-new-rol.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonAPComponent,
 
    ButtonLoginComponent,
    BannerComponent,
    FotoPerfilComponent,
    BotonMenuComponent,
    BodyComponent,
    TitlesComponent,
    InformationComponent,
    GraphicComponent,
    BarSkillsComponent,
    InitSesionComponent,
    PortfolioComponent,
    SaveChangesButtonComponent,
    EditButtonComponent,
  
    FormExperienciaComponent,
    ReloadDirective,
    FormNewExperienciaComponent,
    NewButtonComponent,
    FormUpdateEducacionComponent,
    FormNewEducacionComponent,
    FormNewCursoComponent,
    FormUpdateCursoComponent,
    FormUpdateSkillsComponent,
    FormNewSkillsComponent,
    FormUpdateSobremiComponent,
    FormUpdateRolComponent,
    FormNewRolComponent,
    DeleteButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
