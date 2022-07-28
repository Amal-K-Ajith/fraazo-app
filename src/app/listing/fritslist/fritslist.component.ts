import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket.service';
import { FRUITS } from 'src/app/mock-data';
import { item } from 'src/app/items';
import { ItemServiceService } from 'src/app/item-service.service';

@Component({
  selector: 'app-fritslist',
  templateUrl: './fritslist.component.html',
  styleUrls: ['./fritslist.component.css']
})
export class FritslistComponent implements OnInit {

  constructor(private basket:BasketService,private itemser:ItemServiceService) { }
  fruits:item[]=[];
  ngOnInit(): void {
    this.getfruits();
  }

  getfruits(){
    this.itemser.getFruits().subscribe(fruits=>this.fruits=fruits);
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
