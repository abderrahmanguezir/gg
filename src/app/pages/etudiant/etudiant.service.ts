import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Etudiant } from '../entity/etudiant'

@Injectable({
    providedIn: 'root'
})
export class EtudiantService {

  constructor(private http :HttpClient){

  }
  getEtudiants(): Observable<any>{
      return this.http.get(API_URLS.ETUDIANTS_URL);
  }
  
  addEtudiant(etudiant:Etudiant): Observable<any>{
      return this.http.post(API_URLS.ETUDIANTS_URL, etudiant);
  }

  getEtudiantById(id:number): Observable<any>{
    return this.http.get(API_URLS.ETUDIANTS_URL+`/${id}`);
}

  updateEtudiant(etudiant:Etudiant): Observable<any>{
      return this.http.put(API_URLS.ETUDIANTS_URL, etudiant);
  }

  deleteEtudiant(id:number): Observable<any>{
      console.log("Ice "+ id);
      return this.http.delete(API_URLS.ETUDIANTS_URL +`/${id}`);
  }
}