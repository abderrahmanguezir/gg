import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Soutenance } from '../entity/soutenance';

@Injectable({
    providedIn: 'root'
})
export class SoutenanceService {

  constructor(private http :HttpClient){

  }
  
  getSoutenances(): Observable<any>{
      return this.http.get(API_URLS.SOUTENANCES_URL);
  }
  
  addSoutenance(soutenance:Soutenance): Observable<any>{
      return this.http.post(API_URLS.SOUTENANCES_URL, soutenance);
  }

  getSoutenanceById(id:number): Observable<any>{
    return this.http.get(API_URLS.SOUTENANCES_URL+`/${id}`);
    }

  updateSoutenance(soutenance:Soutenance): Observable<any>{
      return this.http.put(API_URLS.SOUTENANCES_URL, soutenance);
  }

  deleteSoutenance(id:number): Observable<any>{
      console.log("delete soutenance "+ id);
      return this.http.delete(API_URLS.SOUTENANCES_URL +`/${id}`);
  }
}