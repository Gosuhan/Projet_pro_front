import { Imembre } from './imembre';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { IcategorieSavoir } from './icategorie-savoir';
import { Isavoir } from './isavoir';
import { Iressource } from './iressource';
import { Iinscription } from './iinscription';
import { ItypeInscription } from './itype-inscription';
import { IniveauSavoir } from './iniveau-savoir';

@Injectable()
export class ApiService {

 URL = 'http://localhost:8080/api';


  constructor(private http: HttpClient) {}

  getMembres() {
    return this.http.get<Imembre[]>(`${this.URL}/membres`);
  }

  getMembre(id) {
    return this.http.get<Imembre>(`${this.URL}/membre/${id}`);
  }

  updateMembre(id, membre: Imembre) {
    return this.http.put<Imembre>(`${this.URL}/membre/${id}`, membre);
  }

  addMembre(membre: Imembre) {
    if (membre.id_membre == null) {
      return this.http.post<Imembre>(`${this.URL}/membres`, membre);
    }
  }

  deleteMembre(id) {
    return this.http.delete<any>(`${this.URL}/membre/${id}`);
  }

  getCategoriesSavoir() {
    return this.http.get<IcategorieSavoir[]>(`${this.URL}/categories-savoir`);
  }

  getCategorieSavoir(id) {
    return this.http.get<IcategorieSavoir>(`${this.URL}/categorie-savoir/${id}`);
  }

  updateCategorieSavoir(id, categorieSavoir: IcategorieSavoir) {
    return this.http.put<IcategorieSavoir>(`${this.URL}/categorie-savoir/${id}`, categorieSavoir);
  }

  addCategorieSavoir(categorieSavoir: IcategorieSavoir) {
    if (categorieSavoir.id_categorie_savoir == null) {
      return this.http.post<IcategorieSavoir>(`${this.URL}/categories-savoir`, categorieSavoir);
    }
  }

  deleteCategorieSavoir(id) {
    return this.http.delete<any>(`${this.URL}/categorie-savoir/${id}`);
  }

  getSavoirs() {
    return this.http.get<Isavoir[]>(`${this.URL}/savoirs`);
  }

  getSavoir(id) {
    return this.http.get<Isavoir>(`${this.URL}/savoir/${id}`);
  }

  updateSavoir(id, savoir: Isavoir) {
    return this.http.put<Isavoir>(`${this.URL}/savoir/${id}`, savoir);
  }

  addSavoir(savoir: Isavoir) {
    if (savoir.id_savoir == null) {
      return this.http.post<Isavoir>(`${this.URL}/savoirs`, savoir);
    }
  }

  deleteSavoir(id) {
    return this.http.delete<any>(`${this.URL}/savoir/${id}`);
  }

  getRessources() {
    return this.http.get<Iressource[]>(`${this.URL}/ressources`);
  }

  getRessource(id) {
    return this.http.get<Iressource>(`${this.URL}/ressource/${id}`);
  }

  updateRessource(id, ressource: Iressource) {
    return this.http.put<Iressource>(`${this.URL}/ressource/${id}`, ressource);
  }

  addRessource(ressource: Iressource) {
    if (ressource.id_ressource == null) {
      return this.http.post<Iressource>(`${this.URL}/ressources`, ressource);
    }
  }

  deleteRessource(id) {
    return this.http.delete<any>(`${this.URL}/ressource/${id}`);
  }

  searchRessources(recherche) {
    return this.http.get<Iressource[]>(`${this.URL}/ressources/${recherche}`);
  }

  addRessourceSavoir(idSavoir, idRessource, ressource: Iressource) {
    return this.http.put<Iressource>(`${this.URL}/savoir/${idSavoir}/addressource/${idRessource}`, ressource);
  }

  deleteRessourceSavoir(idSavoir, idRessource, ressource: Iressource) {
    return this.http.put<Iressource>(`${this.URL}/savoir/${idSavoir}/delressource/${idRessource}`, ressource);
  }

  getRessourcesSavoir(id) {
    return this.http.get<Iressource[]>(`${this.URL}/savoir/${id}/ressources`);
  }

  searchSavoirs(recherche) {
    return this.http.get<Isavoir[]>(`${this.URL}/savoirs/${recherche}`);
  }

  addSavoirCategorieSavoir(idCategorieSavoir, idSavoir, savoir: Isavoir) {
    return this.http.put<Isavoir>(`${this.URL}/categorie-savoir/${idCategorieSavoir}/addsavoir/${idSavoir}`, savoir);
  }

  deleteSavoirCategorieSavoir(idCategorieSavoir, idSavoir, savoir: Isavoir) {
    return this.http.put<Isavoir>(`${this.URL}/categorie-savoir/${idCategorieSavoir}/delsavoir/${idSavoir}`, savoir);
  }

  getSavoirsCategorieSavoir(id) {
    return this.http.get<Isavoir[]>(`${this.URL}/categorie-savoir/${id}/savoirs`);
  }

  getMembresSavoir(id) {
    return this.http.get<Imembre[]>(`${this.URL}/savoir/${id}/membres`);
  }

  getMembresPasseursSavoir(id) {
    return this.http.get<Imembre[]>(`${this.URL}/savoir/${id}/membres-passeurs`);
  }

  getMembresPasseursDebutantsSavoir(id) {
    return this.http.get<Imembre[]>(`${this.URL}/savoir/${id}/membres-passeurs-debutants`);
  }

  getMembresPasseursIntermediairesSavoir(id) {
    return this.http.get<Imembre[]>(`${this.URL}/savoir/${id}/membres-passeurs-intermediaires`);
  }

  getMembresPasseursConfirmesSavoir(id) {
    return this.http.get<Imembre[]>(`${this.URL}/savoir/${id}/membres-passeurs-confirmes`);
  }

  getMembresReceveursSavoir(id) {
    return this.http.get<Imembre[]>(`${this.URL}/savoir/${id}/membres-receveurs`);
  }

  getMembresReceveursDebutantsSavoir(id) {
    return this.http.get<Imembre[]>(`${this.URL}/savoir/${id}/membres-receveurs-debutants`);
  }

  getMembresReceveursIntermediairesSavoir(id) {
    return this.http.get<Imembre[]>(`${this.URL}/savoir/${id}/membres-receveurs-intermediaires`);
  }

  getMembresReceveursConfirmesSavoir(id) {
    return this.http.get<Imembre[]>(`${this.URL}/savoir/${id}/membres-receveurs-confirmes`);
  }

  getInscriptionsMembre(id) {
    return this.http.get<Iinscription[]>(`${this.URL}/membre/${id}/inscriptions`);
  }

  deleteInscriptionMembre(idMembre, idInscription, inscription: Iinscription) {
    return this.http.put<Iinscription>(`${this.URL}/membre/${idMembre}/delinscription/${idInscription}`, inscription);
  }

  getInscription(id) {
    return this.http.get<Iinscription>(`${this.URL}/inscription/${id}`);
  }

  addInscription(inscription: Iinscription) {
    if (inscription.id_inscription == null) {
      return this.http.post<Iinscription>(`${this.URL}/inscription`, inscription);
    }
  }

  deleteInscription(id) {
    return this.http.delete<any>(`${this.URL}/inscription/${id}`);
  }

  addInscriptionMembre(idMembre, idInscription, inscription: Iinscription) {
    return this.http.put<Iinscription>(`${this.URL}/membre/${idMembre}/addinscription/${idInscription}`, inscription);
  }

  searchInscriptions(recherche) {
    return this.http.get<Iinscription[]>(`${this.URL}/inscriptions/${recherche}`);
  }

  searchTypesInscription(recherche) {
    return this.http.get<ItypeInscription[]>(`${this.URL}/types-inscription/${recherche}`);
  }

  getTypesInscription() {
    return this.http.get<ItypeInscription[]>(`${this.URL}/types-inscription`);
  }

  getTypeInscription(id) {
    return this.http.get<ItypeInscription>(`${this.URL}/type-inscription/${id}`);
  }

  addInscriptionTypeInscription(idTypeInscription, idInscription, inscription: Iinscription) {
    return this.http.put<Iinscription>(`${this.URL}/type-inscription/${idTypeInscription}/addinscription/${idInscription}`, inscription);
  }

  addInscriptionSavoir(idSavoir, idInscription, inscription: Iinscription) {
    return this.http.put<Iinscription>(`${this.URL}/savoir/${idSavoir}/addinscription/${idInscription}`, inscription);
  }

  getNiveauxSavoir() {
    return this.http.get<IniveauSavoir[]>(`${this.URL}/niveaux-savoir`);
  }

  getNiveauSavoir(id) {
    return this.http.get<IniveauSavoir>(`${this.URL}/niveau-savoir/${id}`);
  }

  addInscriptionNiveauSavoir(idNiveauSavoir, idInscription, inscription: Iinscription) {
    return this.http.put<Iinscription>(`${this.URL}/niveau-savoir/${idNiveauSavoir}/addinscription/${idInscription}`, inscription);
  }

}
