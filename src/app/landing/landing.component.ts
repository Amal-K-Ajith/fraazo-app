import { Component, OnInit} from '@angular/core';
import { ItemServiceService } from '../item-service.service';



import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],

  animations: [
    trigger('carouselAnimation', [
      transition('void => *', 
        [style({ transform: 'translateX(100%)' }),animate('300ms') ]
      ),
      transition('* => void', [
        animate('300ms',style({transform:'translateX(-100%)'}))
      ])
    ])
  ]



})
export class LandingComponent implements OnInit {

  constructor( private itemService:ItemServiceService){
 }
   slides:any;
  isPaused=true;
  demo:undefined;

  curslide=0;


 log(i:any){
   console.log(i);
 }



  getOffers(){
    this.itemService.getOffer().subscribe(slides=>this.slides=slides);
  }

  slide(){
    this.curslide++;
    if(this.curslide>=10)this.curslide=0;
    // console.log(this.curslide);
  }
  ngOnInit(): void {

    setInterval(() => {
      if(this.isPaused) {this.slide();}
      }, 5000);
      this.getOffers();
  }

}
