import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Plants } from './plants';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private http: HttpClient) { }
  baseUrl: string ='http://localhost/phpprojet/';
  getContacts(): Observable<Plants[]>{
    return this.http.get<Plants[]>(this.baseUrl+'fetchimage.php');

  }
}
