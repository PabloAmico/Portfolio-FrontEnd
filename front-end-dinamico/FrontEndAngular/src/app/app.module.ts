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
    GraphicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
