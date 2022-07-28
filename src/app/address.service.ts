import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  js=''

}

export interface address{

  firstName:string
  lastName:string
  phn:number
  address:{
    street:string,
    city:string,
    landMark:string,
    state:string,
    pincode:number
  }

}