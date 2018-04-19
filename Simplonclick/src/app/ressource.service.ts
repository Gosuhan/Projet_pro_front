import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';
import { Iressource } from './iressource';
import { Isavoir } from './isavoir';

@Injectable()
export class RessourceService {
  constructor(private api: ApiService) {}

  update$: Subject<any> = new Subject<any>();

  selectedSavoir: Iressource;

  getRessources(): Observable<Iressource[]> {
    return this.api.getRessources() as Observable<Iressource[]>;
  }

  getRessource(id): Observable<Iressource> {
    return this.api.getRessource(id) as Observable<Iressource>;
  }

  updateRessource(ressource: Iressource): Observable<Iressource> {
    return this.api
      .updateRessource(ressource.id_ressource, ressource)
      .pipe(tap(data => this.update$.next()));
  }

  addRessource(ressource: Iressource): Observable<Iressource> {
    return this.api
      .addRessource(ressource)
      .pipe(tap(data => this.update$.next()));
  }

  deleteRessource(id) {
    return this.api.deleteRessource(id).pipe(tap(data => this.update$.next()));
  }

  searchRessources(recherche): Observable<Iressource[]> {
    return this.api.searchRessources(recherche) as Observable<Iressource[]>;
  }

  addRessourceSavoir(savoir: Isavoir, ressource: Iressource): Observable<Iressource> {
    return this.api.addRessourceSavoir(savoir.id_savoir, ressource.id_ressource, ressource) as Observable<Iressource>;
  }

  deleteRessourceSavoir(savoir: Isavoir, ressource: Iressource): Observable<Iressource> {
    return this.api.deleteRessourceSavoir(savoir.id_savoir, ressource.id_ressource, ressource) as Observable<Iressource>;
  }

  getRessourcesSavoir(id): Observable<Iressource[]> {
    return this.api.getRessourcesSavoir(id) as Observable<Iressource[]>;
  }

}
