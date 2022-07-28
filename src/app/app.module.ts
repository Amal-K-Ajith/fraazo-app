import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegeComponent } from './vege/vege.component';

// import { ListingsidebarComponent } from './listingsidebar/listingsidebar.component';
import { CheckingComponent } from './checking/checking.component';
import { ListingModule } from './listing/listing.module';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { SummaryComponent } from './summary/summary.component';
import { BillingComponent } from './billing/billing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FruitsComponent,
    VegeComponent,
    CheckingComponent,
    CartComponent,
    DetailComponent,
    SummaryComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ListingModule,
    ReactiveFormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
