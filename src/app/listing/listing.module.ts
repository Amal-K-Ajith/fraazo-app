import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './listing/listing.component';
import { FritslistComponent } from './fritslist/fritslist.component';
import { VegeslistComponent } from './vegeslist/vegeslist.component';


@NgModule({
  declarations: [
    ListingComponent,
    VegeslistComponent,
    FritslistComponent,
    VegeslistComponent
  ],
  imports: [
    CommonModule,
    ListingRoutingModule
  ]
})
export class ListingModule { }
