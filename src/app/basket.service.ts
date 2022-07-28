import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { item } from './items';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  name=''
  basket=new Set<item>();
  total=0;
  constructor() { }
  // quantity:number[][]=newArray(2,newArray(5));
  add(item:item){
    this.total+=item.price;
    if(!this.basket.has(item))
    {
      item.quant=1;
      item.totprice=item.price
      this.basket.add(item);
    }
    else
    {
      item.quant!+=1;
      item.totprice!+=item.price
    }
   console.log(this.totalPrice()+' baskSer');
}

  decrease(item:item){
    if(item.quant!-1<=0){
      this.basket.delete(item);
    }
    else{
      item.quant!--;
    }
    this.total-=item.price;
  }

  totalPrice(){
    return this.total
  }


}
