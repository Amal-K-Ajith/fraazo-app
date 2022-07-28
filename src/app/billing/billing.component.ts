import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AddressService } from '../address.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor( private fb:FormBuilder,public addr:AddressService,private bas:BasketService,private router:Router) { }

  // fname=this.addr.firstname;

  deliveryDetailForm=this.fb.group({
    firstName:['',Validators.required],
    lastName:[''],
    phn:[''],
    address:this.fb.group({
      street:[''],
      city:[''],
      landMark:[''],
      state:[''],
      pinCode:['']
    }),
    // another:this.fb.array([
    //   this.fb.control('')
    // ])
  })

  

  onSubmit(){
    // console.warn(this.deliveryDetailForm.value);
    // this.addr.firstname.push(this.deliveryDetailForm.value.firstName);
    // console.log(this.deliveryDetailForm.get('firstName'))
    // let all:NavigationExtras={queryParams:{data:this.deliveryDetailForm.value}}
   
    this.addr.js=JSON.stringify(this.deliveryDetailForm.value);
    this.router.navigate(['/summary']);

  }

  get another(){
    return this.deliveryDetailForm.get('another') as FormArray
  }

  addAnother(){
    this.another.push(this.fb.control(''));
  }

  check(){
    if(!this.bas.basket.size)
     this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.check();
  }

}
