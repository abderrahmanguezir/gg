import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Enseignant } from '../entity/enseignant'

@Injectable({
    providedIn: 'root'
})
export class EnseignantService {

  constructor(private http :HttpClient){

  }
  getEnseignants(): Observable<any>{
      return this.http.get(API_URLS.ENSEIGNANT_URL);
  }
  
  addEnseignant(enseignant:Enseignant): Observable<any>{
      return this.http.post(API_URLS.ENSEIGNANT_URL, enseignant);
  }

  getEnseignantById(id:number): Observable<any>{
    return this.http.get(API_URLS.ENSEIGNANT_URL+`/${id}`);
}

  updateEnseignant(enseignant:Enseignant): Observable<any>{
      return this.http.put(API_URLS.ENSEIGNANT_URL, enseignant);
  }

  deleteEnseignant(id:number): Observable<any>{
      console.log("Ice "+ id);
      return this.http.delete(API_URLS.ENSEIGNANT_URL +`/${id}`);
  }
}