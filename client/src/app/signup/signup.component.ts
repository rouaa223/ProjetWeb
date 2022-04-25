import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  angForm :FormGroup;

  
  constructor(private fb:FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm=this.fb.group({
      emailclient:[''],
      nameclient:[''],
      passwordclient:[''],
      phoneclient:[''],
      typeclient:['']
    })
   }

  ngOnInit(): void {
  }
  postdata(angForm:any){
    this.dataService.clientregistration(
      angForm.value.emailclient,
      angForm.value.nameclient,
      angForm.value.passwordclient,
      angForm.value.phoneclient,
      angForm.value.typeclient
    )
    .pipe(first())
    .subscribe(data => {
      this.router.navigate(['login']);
    
    },
    error => {

    })
  }

}
