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
