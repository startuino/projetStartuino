// Module Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Module perso qui s'auto implémente à chaque ajout d'une route
import { HomePageComponent } from './home-page/home-page.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { JeProgrammeComponent } from './je-programme/je-programme.component';
import { JeModeliseComponent } from './je-modelise/je-modelise.component';
import { ImprimeTroisDComponent } from './imprime-trois-d/imprime-trois-d.component';
import { ContactComponent } from './contact/contact.component';
import { Projet1Component } from './projets/projet1/projet1.component';
import { Projet2Component } from './projets/projet2/projet2.component';
import { Projet3Component } from './projets/projet3/projet3.component';
import { Error404Component } from './errors/error404/error404.component';





// Déclaration de mes routes => url (que je déclare ensuite dans app.component.html )
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'apropos', component: AProposComponent },
  { path: 'jeprogramme', component: JeProgrammeComponent },
  { path: 'jemodelise', component: JeModeliseComponent },
  { path: 'jimprimeentroisd', component: ImprimeTroisDComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projets/projet1', component: Projet1Component },
  { path: 'projets/projet2', component: Projet2Component },
  { path: 'projets/projet3', component: Projet3Component },
  { path: 'error', component: Error404Component },
];


// @NgModule suivi de l'export !!!
@NgModule({
  imports: [RouterModule.forRoot(routes,
  {enableTracing: true}) ],

  exports: [RouterModule],
})

export class AppRoutingModule { }
