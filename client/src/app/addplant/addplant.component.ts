import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addplant',
  templateUrl: './addplant.component.html',
  styleUrls: ['./addplant.component.css']
})
export class AddplantComponent implements OnInit {
  auth:any;
  addplantForm: FormGroup ;

  constructor(private formBuilder: FormBuilder,
    private apiService: ServiceService,
    private router:Router
    ) {
   }

  ngOnInit() :void  {
    this.addplantForm =this.formBuilder.group({
    idplant:[],
    nameplant:[''],
    priceplant:[''],
    descriptionplant:[''],
    photolink:[''],
    
  });

  this.auth=localStorage.getItem('token');
  if(!this.auth){
    this.router.navigate(['login']);

  }


  }
  onSubmit(){
    console.log(this.addplantForm.value);
      this.apiService.createPlant(this.addplantForm.value).subscribe(data => {
      this.router.navigate(['store']);
        });
  }
}
