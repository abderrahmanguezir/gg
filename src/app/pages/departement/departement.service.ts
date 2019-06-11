import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Departement } from '../entity/departement'

@Injectable({
    providedIn: 'root'
})
export class DepartementService {

  constructor(private http :HttpClient){

  }
  getDepartements(): Observable<any>{
      return this.http.get(API_URLS.DEPARTEMENTS_URL);
  }
  
  addDepartement(departement:Departement): Observable<any>{
      return this.http.post(API_URLS.DEPARTEMENTS_URL, departement);
  }

  getDepartementById(id:number): Observable<any>{
    return this.http.get(API_URLS.DEPARTEMENTS_URL+`/${id}`);
}

  updateDepartement(departement:Departement): Observable<any>{
      return this.http.put(API_URLS.DEPARTEMENTS_URL, departement);
  }

  deleteDepartement(id:number): Observable<any>{
      console.log("Ice "+ id);
      return this.http.delete(API_URLS.DEPARTEMENTS_URL +`/${id}`);
  }
}