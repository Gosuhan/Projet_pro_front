import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject } from 'rxjs/Subject';
import { Iinscription } from './iinscription';
import { Observable } from 'rxjs/Observable';
import { Imembre } from './imembre';
import { tap } from 'rxjs/operators';

@Injectable()
export class InscriptionService {

  constructor(private api: ApiService) {}

  update$: Subject<any> = new Subject<any>();

  selectedInscription: Iinscription;

  getInscriptionsMembre(id): Observable<Iinscription[]> {
    return this.api.getInscriptionsMembre(id) as Observable<Iinscription[]>;
  }

  deleteInscriptionMembre(membre: Imembre, inscription: Iinscription): Observable<Iinscription> {
    return this.api.deleteInscriptionMembre(membre.id_membre, inscription.id_inscription, inscription) as Observable<Iinscription>;
  }

  addInscription(inscription: Iinscription): Observable<Iinscription> {
    return this.api
      .addInscription(inscription)
      .pipe(tap(data => this.update$.next()));
  }

  addInscriptionMembre(membre: Imembre, inscription: Iinscription): Observable<Iinscription> {
    return this.api.addInscriptionMembre(membre.id_membre, inscription.id_inscription, inscription) as Observable<Iinscription>;
  }

  searchInscriptions(recherche): Observable<Iinscription[]> {
    return this.api.searchInscriptions(recherche) as Observable<Iinscription[]>;
  }

}
