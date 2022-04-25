import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { first } from 'rxjs';
import { AddplantComponent } from '../addplant/addplant.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm:FormGroup;
  constructor(private fb: FormBuilder,private dataService:ApiService, private router: Router) {
    this.angForm=this.fb.group({
      emailclient:['',[Validators.required,Validators.minLength(1), Validators.email]],
      passwordclient:['', Validators.required]
    });
   }
   postdata(angForm:any){
     this.dataService.clientlogin(angForm.value.emailclient,angForm.value.passwordclient)
     .pipe(first())
     .subscribe(
       (data:any ) => {
         console.log(data);
         if(data.message=='success'){

         
         //const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl: '/store';
         this.router.navigate(['store']);
        }

       },
       error => {
         console.log(error)
       }
     );

   }

  ngOnInit(): void {
  }

}
