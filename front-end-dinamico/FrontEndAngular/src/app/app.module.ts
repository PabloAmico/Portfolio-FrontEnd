import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonAPComponent } from './components/button-ap/button-ap.component';
import { ButtonMailComponent } from './components/button-mail/button-mail.component';
import { ButtonLinkedinComponent } from './components/button-linkedin/button-linkedin.component';
import { ButtonGitHubComponent } from './components/button-git-hub/button-git-hub.component';
import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonAPComponent,
    ButtonMailComponent,
    ButtonLinkedinComponent,
    ButtonGitHubComponent,
    ButtonLoginComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
