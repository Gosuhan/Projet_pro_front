import { RessourceService } from './ressource.service';
import { SavoirService } from './savoir.service';
import { ApiService } from './api.service';
import { MembreService } from './membre.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatTableModule,
  MatNativeDateModule,
  MatListModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatSortModule,
  MatSnackBarModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { CategorieSavoirListComponent } from './categorie-savoir-list/categorie-savoir-list.component';
import { MembreListComponent } from './membre-list/membre-list.component';
import { SavoirListComponent } from './savoir-list/savoir-list.component';
import { RessourceListComponent } from './ressource-list/ressource-list.component';
import { IdentificationComponent } from './identification/identification.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ObjectifComponent } from './objectif/objectif.component';
import { CategorieSavoirComponent } from './categorie-savoir/categorie-savoir.component';
import { SavoirComponent } from './savoir/savoir.component';
import { MembreComponent } from './membre/membre.component';
import { HeaderComponent } from './header/header.component';
import { AppService } from './app.service';
import { RessourceAuSavoirComponent } from './ressource-au-savoir/ressource-au-savoir.component';
import { RessourceDuSavoirComponent } from './ressource-du-savoir/ressource-du-savoir.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent,
    AdminComponent,
    CategorieSavoirListComponent,
    MembreListComponent,
    SavoirListComponent,
    RessourceListComponent,
    IdentificationComponent,
    AccueilComponent,
    ObjectifComponent,
    CategorieSavoirComponent,
    SavoirComponent,
    MembreComponent,
    HeaderComponent,
    MembreListComponent,
    RessourceAuSavoirComponent,
    RessourceDuSavoirComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatNativeDateModule,
    MatListModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSnackBarModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [
    AppService,
    MembreService,
    ApiService,
    SavoirService,
    RessourceService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    RessourceAuSavoirComponent,
    RessourceDuSavoirComponent
  ]
})
export class AppModule { }
