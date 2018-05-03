import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';
import { Imembre } from './imembre';

@Injectable()
export class MembreService {
  constructor(private api: ApiService) {}

  update$: Subject<any> = new Subject<any>();

  selectedAffaire: Imembre;

  getMembres(): Observable<Imembre[]> {
    return this.api.getMembres() as Observable<Imembre[]>;
  }

  getMembre(id): Observable<Imembre> {
    return this.api.getMembre(id) as Observable<Imembre>;
  }

  updateMembre(membre: Imembre): Observable<Imembre> {
    return this.api
      .updateMembre(membre.id_membre, membre)
      .pipe(tap(data => this.update$.next()));
  }

  addMembre(membre: Imembre): Observable<Imembre> {
    return this.api
      .addMembre(membre)
      .pipe(tap(data => this.update$.next()));
  }

  deleteMembre(id) {
    return this.api.deleteMembre(id).pipe(tap(data => this.update$.next()));
  }

  getMembresPasseursSavoir(id): Observable<Imembre[]> {
    return this.api.getMembresPasseursSavoir(id) as Observable<Imembre[]>;
  }

  getMembresPasseursDebutantsSavoir(id): Observable<Imembre[]> {
    return this.api.getMembresPasseursDebutantsSavoir(id) as Observable<Imembre[]>;
  }

  getMembresPasseursIntermediairesSavoir(id): Observable<Imembre[]> {
    return this.api.getMembresPasseursIntermediairesSavoir(id) as Observable<Imembre[]>;
  }

  getMembresPasseursConfirmesSavoir(id): Observable<Imembre[]> {
    return this.api.getMembresPasseursConfirmesSavoir(id) as Observable<Imembre[]>;
  }

  getMembresReceveursSavoir(id): Observable<Imembre[]> {
    return this.api.getMembresReceveursSavoir(id) as Observable<Imembre[]>;
  }

  getMembresReceveursDebutantsSavoir(id): Observable<Imembre[]> {
    return this.api.getMembresReceveursDebutantsSavoir(id) as Observable<Imembre[]>;
  }

  getMembresReceveursIntermediairesSavoir(id): Observable<Imembre[]> {
    return this.api.getMembresReceveursIntermediairesSavoir(id) as Observable<Imembre[]>;
  }

  getMembresReceveursConfirmesSavoir(id): Observable<Imembre[]> {
    return this.api.getMembresReceveursConfirmesSavoir(id) as Observable<Imembre[]>;
  }

  getMembresSavoir(id): Observable<Imembre[]> {
    return this.api.getMembresSavoir(id) as Observable<Imembre[]>;
  }
}
