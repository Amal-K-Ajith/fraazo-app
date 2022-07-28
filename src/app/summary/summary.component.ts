import { Component, OnInit } from '@angular/core';
import { AddressService,address } from '../address.service';
import { BasketService } from '../basket.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private addr:AddressService,public basket:BasketService) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params=>{
    //   this.fName=params.get('firstName'),
    //   this.lName=params.get('lastName'),
    //   this.addr=params.get('address')
    //   // this.all=params.get('address.state');
    // });
    // this.addr=this.route.snapshot.paramMap.get('addr')    

    this.all=JSON.parse(this.addr.js)
    console.log(this.all)
    console.log(this.basket.basket)
  }

  all!:address
  bas=this.basket.basket

}
