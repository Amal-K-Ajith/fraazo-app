import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FritslistComponent } from './fritslist/fritslist.component';
import { ListingComponent } from './listing/listing.component';
import { VegeslistComponent } from './vegeslist/vegeslist.component';

const routes: Routes = [
  {path:'listing',redirectTo:'listing/vege',pathMatch:'full'},
  {path:'listing',component:ListingComponent,
  children: [
    {
      path: 'vege',
      component: VegeslistComponent
    },
    {
      path:'fruits',
      component:FritslistComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
