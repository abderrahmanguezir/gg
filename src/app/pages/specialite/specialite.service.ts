import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Specialite } from '../entity/specialite'

@Injectable({
    providedIn: 'root'
})
export class SpecialiteService {

  constructor(private http :HttpClient){

  }
  getSpecialites(): Observable<any>{
      return this.http.get(API_URLS.SPECIALITES_URL);
  }
  
  addSpecialite(specialite:Specialite): Observable<any>{
      return this.http.post(API_URLS.SPECIALITES_URL, specialite);
  }

  getSpecialiteById(id:number): Observable<any>{
    return this.http.get(API_URLS.SPECIALITES_URL+`/${id}`);
}

  updateSpecialite(specialite:Specialite): Observable<any>{
      return this.http.put(API_URLS.SPECIALITES_URL, specialite);
  }

  deleteSpecialite(id:number): Observable<any>{
      console.log("Ice "+ id);
      return this.http.delete(API_URLS.SPECIALITES_URL +`/${id}`);
  }
}