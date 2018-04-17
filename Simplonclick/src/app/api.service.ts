import { Imembre } from './imembre';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

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

}
