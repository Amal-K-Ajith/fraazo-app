import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { BasketService } from '../basket.service';
import { item } from '../items';
// import { fadeInAnimation } from '../animation';
import { animate, style, transition, trigger } from '@angular/animations';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0,transform: 'translateY(-50px)' }),
            animate('300ms ease-out', 
                    style({ opacity: 1,transform: 'translateY(0px)' }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({  opacity: 1 ,transform: 'translateY(0px)'}),
            animate('300ms ease-in', 
                    style({  opacity: 0 ,transform: 'translateY(-50px)'}))
          ]
        )
      ]
    )
  ]
})
export class CartComponent implements OnInit {

  constructor( public basketService:BasketService,private iteser:ItemServiceService) {
  }
  getOpen(){
    return this.iteser.opens;
  }
  change(){
    this.iteser.opens=false
  }
  baskets:Set<item>=this.basketService.basket;
  total=this.basketService.total;
  remove(i:item){
    this.basketService.total-=(i.price*i.quant!);
    this.total-=(i.price*i.quant!);
    // this.basketService.remove(this.baskets[i]);
    this.baskets.delete(i);
    this.basketService.basket.size
  }

  addplus(item:item){

    // this.total+=item.price;
    this.basketService.add(item);

  }

  addminus(item:item){
    // this.total-=(item.price);
    this.basketService.decrease(item);
  }
  ngOnInit(): void {
  }
}
