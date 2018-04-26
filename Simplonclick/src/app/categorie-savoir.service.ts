import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';
import { IcategorieSavoir } from './icategorie-savoir';

@Injectable()
export class CategorieSavoirService {
  constructor(private api: ApiService) {}

  update$: Subject<any> = new Subject<any>();

  selectedCategorieSavoir: IcategorieSavoir;

  getCategoriesSavoir(): Observable<IcategorieSavoir[]> {
    return this.api.getCategoriesSavoir() as Observable<IcategorieSavoir[]>;
  }

  getCategorieSavoir(id): Observable<IcategorieSavoir> {
    return this.api.getCategorieSavoir(id) as Observable<IcategorieSavoir>;
  }

  updateCategorieSavoir(categorieSavoir: IcategorieSavoir): Observable<IcategorieSavoir> {
    return this.api
      .updateCategorieSavoir(categorieSavoir.id_categorie_savoir, categorieSavoir)
      .pipe(tap(data => this.update$.next()));
  }

  addCategorieSavoir(categorieSavoir: IcategorieSavoir): Observable<IcategorieSavoir> {
    return this.api
      .addCategorieSavoir(categorieSavoir)
      .pipe(tap(data => this.update$.next()));
  }

  deleteCategorieSavoir(id) {
    return this.api.deleteCategorieSavoir(id).pipe(tap(data => this.update$.next()));
  }

}
