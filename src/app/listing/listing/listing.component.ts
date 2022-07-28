import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket.service';
import { item } from 'src/app/items';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(public basket:BasketService) { }
  log(){
    console.log("hi")
    // this.bas.delete()
  }
  bas:Set<item>=this.basket.basket;
  ngOnInit(): void {
  }

}
