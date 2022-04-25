import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from './Model/plant';
import {HttpClient} from '@angular/common/http';
import { ApiResponse } from './Model/api-response';
import { Contact } from './Model/contact';
import { Order } from './Model/order';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  baseUrl='http://localhost/phpprojet/';

  createPlant(plant:Plant): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl+ 'insert.php', plant);
  }
  createContact(contact:Contact): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl+ 'contact.php', contact);
  }
  createOrder(order:Order): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl+ 'order.php', order);
  }
}
