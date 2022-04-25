import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  plants: any;

  constructor(private plantssservice: PlantsService) { }


  ngOnInit(): void {
    this.plantssservice.getContacts().subscribe(
      (result:any)=>{
        console.log(result);
        this.plants=result.data;
      }
    )
  }

}
