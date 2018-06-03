import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { JeProgrammeComponent } from './je-programme/je-programme.component';
import { JeModeliseComponent } from './je-modelise/je-modelise.component';
import { ImprimeTroisDComponent } from './imprime-trois-d/imprime-trois-d.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetsComponent } from './projets/projets.component';
import { Projet1Component } from './projets/projet1/projet1.component';
import { Projet2Component } from './projets/projet2/projet2.component';
import { Projet3Component } from './projets/projet3/projet3.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './errors/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AProposComponent,
    JeProgrammeComponent,
    JeModeliseComponent,
    ImprimeTroisDComponent,
    ContactComponent,
    ProjetsComponent,
    Projet1Component,
    Projet2Component,
    Projet3Component,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
