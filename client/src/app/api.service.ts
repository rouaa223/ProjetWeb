import { Injectable, Output,EventEmitter } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { client } from './client';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string ="http://localhost/phpprojet/";

  constructor(private httpClient:HttpClient) { }


  public clientregistration(emailclient:any,nameclient:any,  passwordclient:any, phoneclient:any, typeclient:any){
    return this.httpClient.post(this.baseUrl+'/registerclient.php',
    {
      emailclient,nameclient,passwordclient,phoneclient,typeclient
    }
    )
    .pipe(map(client => {
      return client;
    }))
  }

  public clientlogin(emailclient:any, passwordclient:any){
    //alert(email)
    return this.httpClient.post<any>(this.baseUrl+'/loginclient.php',{emailclient, passwordclient})
    .pipe(map((client:any) => {
      console.log(client)
      
       this.setToken(emailclient);
      //this.getLoggedInName.emit(true);
      return client;
    }));
  }
setToken(token: string){
  localStorage.setItem('token',token);
}
  }


