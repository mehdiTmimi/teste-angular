import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';
import { GestionEtudiantComponent } from './components/gestion-etudiant/gestion-etudiant.component';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component';
import { ListEtudiantComponent } from './components/list-etudiant/list-etudiant.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ContactComponent,
    GestionEtudiantComponent,
    AddEtudiantComponent,
    ListEtudiantComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
