import { Injectable } from '@angular/core';
import { item } from './items';
import { of,Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FRUITS, VEGEs,OFFERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  heroesUrl: any;
  opens=false;
  constructor(){
    
   }
  getVeges(): Observable<item[]> {
    const veges = of(VEGEs);
    return veges;
  }
  getFruits(): Observable<item[]> {
    const fruits = of(FRUITS);
    return fruits;
  }
  getOffer(){
    const offers=of(OFFERS)
    return offers;
  }

  getitem(id:number):item{
    // id=~~(id/100);
    let it:any;
    if(~~(id/100)==1)
    {
      console.log(id);
      it=VEGEs.find(x=>x.id==id);
      console.log(it);
    }
    else{
      console.log(id+'fruits');
      it=FRUITS.find(x=>x.id==id);
    }
    if(typeof it==undefined)return VEGEs[0];
    else return it;
  }

}
