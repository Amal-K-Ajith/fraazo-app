import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket.service';
import { VEGEs } from 'src/app/mock-data';
import { item } from 'src/app/items';
import { ItemServiceService } from 'src/app/item-service.service';

@Component({
  selector: 'app-vegeslist',
  templateUrl: './vegeslist.component.html',
  styleUrls: ['./vegeslist.component.css']
})
export class VegeslistComponent implements OnInit {

  constructor(private basket:BasketService,private itemser:ItemServiceService) { }
  veges:item[]=[];
  ngOnInit(): void {
    this.getvege();
  }
  getvege(){
    this.itemser.getVeges().subscribe(veges=>this.veges=veges);
  }



  add(item:item){
    this.basket.add(item);
  }
  addplus(item:item){
    this.basket.add(item);
    // console.log('addplus')
  }

  addminus(item:item){
    this.basket.decrease(item);
  }


  yesfn(item:any)
  {
    if(this.basket.basket.has(item))
      return true
    else return false;
  }
}
