import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Resultat } from '../entity/resultat'

@Injectable({
    providedIn: 'root'
})
export class ResultatService {

  constructor(private http :HttpClient){

  }
  getResultats(): Observable<any>{
      return this.http.get(API_URLS.RESULTATS_URL);
  }
  
  addResultat(resultat:Resultat): Observable<any>{
      return this.http.post(API_URLS.RESULTATS_URL, resultat);
  }

  getResultatById(id:number): Observable<any>{
    return this.http.get(API_URLS.RESULTATS_URL+`/${id}`);
}

  updateResultat(resultat:Resultat): Observable<any>{
      return this.http.put(API_URLS.RESULTATS_URL, resultat);
  }

  deleteResultat(id:number): Observable<any>{
      console.log("Ice "+ id);
      return this.http.delete(API_URLS.RESULTATS_URL +`/${id}`);
  }
}