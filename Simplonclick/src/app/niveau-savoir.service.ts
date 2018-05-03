import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject } from 'rxjs/Subject';
import { IniveauSavoir } from './iniveau-savoir';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NiveauSavoirService {

  constructor(private api: ApiService) {}

  update$: Subject<any> = new Subject<any>();

  selectedNiveauSavoir: IniveauSavoir;

  getNiveauxSavoir(): Observable<IniveauSavoir[]> {
    return this.api.getNiveauxSavoir() as Observable<IniveauSavoir[]>;
  }

  getNiveauSavoir(id): Observable<IniveauSavoir> {
    return this.api.getNiveauSavoir(id) as Observable<IniveauSavoir>;
  }

}
