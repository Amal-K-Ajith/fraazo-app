import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
// import { ListingsidebarComponent } from './listingsidebar/listingsidebar.component';
import { CheckingComponent } from './checking/checking.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { BillingComponent } from './billing/billing.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: LandingComponent,data:{animation:'HomePage'} },
    // {path:'listing',component:CheckingComponent,outlet:'test'},
    // {path:'',children:[
    //   {path:'cart',component:CartComponent,outlet:'cart'}
    // ]},
    {path:"",component:CartComponent,outlet:'cart'},
    {path:"detail/:id",component:DetailComponent,data:{animation:'AboutPage'}},
     {path:'billing',component:BillingComponent},
     {path:'summary',component:SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
