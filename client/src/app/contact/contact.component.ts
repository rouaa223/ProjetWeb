import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  auth:any;
  contactForm: FormGroup ;
  constructor(private formBuilder: FormBuilder,
    private apiService: ServiceService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.contactForm =this.formBuilder.group({
      idcontact:[],
      namecontact:[''],
      emailcontact:[''],
      messagecontact:[''],
      
    });
  }
  onsubmit(){
    console.log(this.contactForm.value);
      this.apiService.createContact(this.contactForm.value).subscribe(data => {
      this.router.navigate(['store']);
        });
  }

}
