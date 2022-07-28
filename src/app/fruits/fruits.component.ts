import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../item-service.service';
import { item } from '../items';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor(private itemService:ItemServiceService,private basket:BasketService) { }

  ngOnInit(): void {
    this.getFruits();
  }
  fruit:item[]=[];
  maxSlidrWidth=-(this.fruit.length-5)*276;
  minSlidrWidth=0;
  slideWidth=0;


  proSliderLeft(slider:HTMLDivElement){
    if(this.slideWidth<this.minSlidrWidth){
      this.slideWidth+=276;
      console.log('clicked proSliderR' +this.slideWidth);
      slider.style.transform="translateX("+this.slideWidth+"px)";
     }
  }

  proSliderRight(slider:HTMLDivElement){
    if(this.slideWidth>this.maxSlidrWidth){
      this.slideWidth-=276;
      console.log('clicked proSliderL' +this.slideWidth);
      slider.style.transform="translateX("+this.slideWidth+"px)";
      }
   }

   yesfn(item:any)
   {
     if(this.basket.basket.has(item))
       return true
     else return false;
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

  getFruits(): void {
    this.itemService.getFruits()
        .subscribe(fruit => this.fruit =fruit);
    this.maxSlidrWidth=-(this.fruit.length-5)*276;
  }

}
