import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from '../basket.service';
import { ItemServiceService } from '../item-service.service';
import { item } from '../items';
import { VEGEs,FRUITS } from '../mock-data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // route: any;

  constructor( private route: ActivatedRoute,private itemSer:ItemServiceService,private basket:BasketService) {
    
   }

  item!: item;
  ngOnInit(): void {
    this.getItem();
  }

  yesfn(item:any)
  {
    if(this.basket.basket.has(item))
      return true
    else return false;
  }
  addplus(item:item){
    this.basket.add(item);
    // console.log('addplus')
  }

  addminus(item:item){
    this.basket.decrease(item);
  }

  add(item:item){
    this.basket.add(item);
  }

  getItem() {
      const id:number= Number(this.route.snapshot.paramMap.get('id'));
      // // this.item!=this.itemSer.getItem(id);
      // this.itemSer.getItem(id)
      // .subscribe(item => this.item = item);
      this.item= this.itemSer.getitem(id);
      // console.log(VEGEs.find(x=>x.id==id));
      console.log(this.item)
    }
     
    showDes(ele1:any,ele2:any,ele3:any){
      // console.log(ele);
      ele1.style.display='block';
      ele2.style.display='none';
      ele3.style.display='none';
    }

  }

