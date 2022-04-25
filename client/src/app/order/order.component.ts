import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlantsService } from '../plants.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  plants: any;
  auth:any;
  orderForm: FormGroup ;

  constructor(private formBuilder: FormBuilder,
    private apiService: ServiceService,
    private router:Router,private plantssservice: PlantsService) { }

  ngOnInit(): void {
    this.plantssservice.getContacts().subscribe(
      (result:any)=>{
        console.log(result);
        this.plants=result.data;
      }
    )
    this.orderForm =this.formBuilder.group({
      idplant:[],
      namepurchase:[''],
      citypurchase:[''],
      adresspurchase:[''],
      phonepurchase:[''],
      plantpurchase:[''],
      emailpurchase:[''],
      paymentpurchase:[''],
      cardpurchase:[''],
    });
    this.auth=localStorage.getItem('token');
  if(!this.auth){
    this.router.navigate(['login']);

  }
  }
  
  onSubmit(){
    console.log(this.orderForm.value);
      this.apiService.createOrder(this.orderForm.value).subscribe(data => {
      this.router.navigate(['store']);
        });
  }
}