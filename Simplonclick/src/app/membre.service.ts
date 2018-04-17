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
}
