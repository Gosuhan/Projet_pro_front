import { Injectable } from '@angular/core';
import { ItypeInscription } from './itype-inscription';
import { ApiService } from './api.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TypeInscriptionService {

  constructor(private api: ApiService) {}

  update$: Subject<any> = new Subject<any>();

  selectedTypeInscription: ItypeInscription;

  getTypesInscription(): Observable<ItypeInscription[]> {
    return this.api.getTypesInscription() as Observable<ItypeInscription[]>;
  }

  getTypeInscription(id): Observable<ItypeInscription> {
    return this.api.getTypeInscription(id) as Observable<ItypeInscription>;
  }

  searchTypesInscription(recherche): Observable<ItypeInscription[]> {
    return this.api.searchTypesInscription(recherche) as Observable<ItypeInscription[]>;
  }

}
