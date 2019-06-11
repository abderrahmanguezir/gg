import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Compte } from '../entity/compte'

@Injectable({
    providedIn: 'root'
})
export class CompteService {

  constructor(private http :HttpClient){

  }
  getComptes(): Observable<any>{
      return this.http.get(API_URLS.COMPTES_URL);
  }
  
  addCompte(compte:Compte): Observable<any>{
      return this.http.post(API_URLS.COMPTES_URL, compte);
  }

  getCompteById(id:number): Observable<any>{
    return this.http.get(API_URLS.COMPTES_URL+`/${id}`);
}

  updateCompte(compte:Compte): Observable<any>{
      return this.http.put(API_URLS.COMPTES_URL, compte);
  }

  deleteCompte(id:number): Observable<any>{
      console.log("Ice "+ id);
      return this.http.delete(API_URLS.COMPTES_URL +`/${id}`);
  }
}