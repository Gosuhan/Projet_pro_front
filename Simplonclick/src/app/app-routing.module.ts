import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { MembreListComponent } from './membre-list/membre-list.component';
import { CategorieSavoirListComponent } from './categorie-savoir-list/categorie-savoir-list.component';
import { SavoirListComponent } from './savoir-list/savoir-list.component';
import { RessourceListComponent } from './ressource-list/ressource-list.component';

import { IdentificationComponent } from './identification/identification.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ObjectifComponent } from './objectif/objectif.component';
import { CategorieSavoirComponent } from './categorie-savoir/categorie-savoir.component';
import { SavoirComponent } from './savoir/savoir.component';
import { MembreComponent } from './membre/membre.component';


const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent},
  { path: 'membres', component: MembreListComponent},
  { path: 'categories-savoir', component: CategorieSavoirListComponent},
  { path: 'savoirs', component: SavoirListComponent },
  { path: 'ressources', component: RessourceListComponent },
  { path: 'indentification', component: IdentificationComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'objectif', component: ObjectifComponent },
  { path: 'categorie-savoir', component: CategorieSavoirComponent },
  { path: 'savoir', component: SavoirComponent },
  { path: 'membre', component: MembreComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: AccueilComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
