import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';
import { Isavoir } from './isavoir';
import { IcategorieSavoir } from './icategorie-savoir';

@Injectable()
export class SavoirService {
  constructor(private api: ApiService) {}

  update$: Subject<any> = new Subject<any>();

  selectedSavoir: Isavoir;

  getSavoirs(): Observable<Isavoir[]> {
    return this.api.getSavoirs() as Observable<Isavoir[]>;
  }

  getSavoir(id): Observable<Isavoir> {
    return this.api.getSavoir(id) as Observable<Isavoir>;
  }

  updateSavoir(savoir: Isavoir): Observable<Isavoir> {
    return this.api
      .updateSavoir(savoir.id_savoir, savoir)
      .pipe(tap(data => this.update$.next()));
  }

  addSavoir(savoir: Isavoir): Observable<Isavoir> {
    return this.api
      .addSavoir(savoir)
      .pipe(tap(data => this.update$.next()));
  }

  deleteSavoir(id) {
    return this.api.deleteSavoir(id).pipe(tap(data => this.update$.next()));
  }

  searchSavoirs(recherche): Observable<Isavoir[]> {
    return this.api.searchSavoirs(recherche) as Observable<Isavoir[]>;
  }

  addSavoirCategorieSavoir(categorieSavoir: IcategorieSavoir, savoir: Isavoir): Observable<Isavoir> {
    return this.api.addSavoirCategorieSavoir(categorieSavoir.id_categorie_savoir, savoir.id_savoir, savoir) as Observable<Isavoir>;
  }

  deleteSavoirCategorieSavoir(categorieSavoir: IcategorieSavoir, savoir: Isavoir): Observable<Isavoir> {
    return this.api.deleteSavoirCategorieSavoir(categorieSavoir.id_categorie_savoir, savoir.id_savoir, savoir) as Observable<Isavoir>;
  }

  getSavoirsCategorieSavoir(id): Observable<Isavoir[]> {
    return this.api.getSavoirsCategorieSavoir(id) as Observable<Isavoir[]>;
  }

}
