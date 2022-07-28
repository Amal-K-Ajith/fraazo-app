import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressService } from './address.service';
import { slideInAnimation } from './animation';
import { BasketService } from './basket.service';
import{CartComponent} from './cart/cart.component'
import { ItemServiceService } from './item-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideInAnimation]
})
export class AppComponent {
  title = 'fraazo-app';
  constructor(public basket:BasketService,private itemser:ItemServiceService,public addr:AddressService){}
  basketSize=this.basket.basket;
 

  prepareRoute(outlet: RouterOutlet) {
    // console.log('change detected');
    return outlet?.activatedRouteData?.['animation'];
  }


  change(){
    this.itemser.opens=true;
  }
  
  prepare(outlet:RouterOutlet){
    return outlet?.activatedRouteData?.['animation'];
  }


  ngOnit():void{
  }
}
