import { Component, OnInit } from '@angular/core';
import { item } from '../items';
import { ItemServiceService } from '../item-service.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-vege',
  templateUrl: './vege.component.html',
  styleUrls: ['./vege.component.css']
})
export class VegeComponent implements OnInit {

  constructor(private itemService:ItemServiceService,public basket:BasketService) { }

  ngOnInit(): void {
    this.getVeges();
  }

  vege:item[]=[];
  maxSlidrWidth=0;
  minSlidrWidth=0;
  slideWidth=0;

  add(item:item){
    this.basket.add(item);
    console.log(this.basket.total+' vage')
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

  getVeges(): void {
    this.itemService.getVeges()
        .subscribe(vege => this.vege =vege);
    this.maxSlidrWidth=-(this.vege.length-5)*276;

  }

  proSliderLeft(slider:HTMLDivElement){
    if(this.slideWidth<this.minSlidrWidth){
      this.slideWidth+=276;
      // console.log('clicked proSliderR' +this.slideWidth);
      slider.style.transform="translateX("+this.slideWidth+"px)";
     }
  }

  proSliderRight(slider:HTMLDivElement){
    if(this.slideWidth>this.maxSlidrWidth){
      this.slideWidth-=276;
      // console.log('clicked proSliderL' +this.slideWidth);
      slider.style.transform="translateX("+this.slideWidth+"px)";
      }
   }

}
