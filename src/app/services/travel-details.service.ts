import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from '../models/detail.model';

const headerOption = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TravelDetailsService {
  url = "http://localhost:3000/Details"
  constructor(private _http: HttpClient) { }

  getDetails(): Observable<Details[]> {
    return this._http.get<Details[]>(this.url, headerOption)
  }



}
