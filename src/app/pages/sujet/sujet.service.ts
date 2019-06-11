import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Sujet } from '../entity/sujet'

@Injectable({
    providedIn: 'root'
})
export class SujetService {

  constructor(private http :HttpClient){

  }
  getSujets(): Observable<any>{
      return this.http.get(API_URLS.SUJETS_URL);
  }
  
  addSujet(sujet:Sujet): Observable<any>{
      return this.http.post(API_URLS.SUJETS_URL, sujet);
  }

  getSujetById(id:number): Observable<any>{
    return this.http.get(API_URLS.SUJETS_URL+`/${id}`);
}

  updateSujet(sujet:Sujet): Observable<any>{
      return this.http.put(API_URLS.SUJETS_URL, sujet);
  }

  deleteSujet(id:number): Observable<any>{
      console.log("Ice "+ id);
      return this.http.delete(API_URLS.SUJETS_URL +`/${id}`);
  }
}