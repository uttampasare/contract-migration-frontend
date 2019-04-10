import { NgModule } from '@angular/core';
import { LeadComponent } from './lead/lead.component';
import { Routes, RouterModule } from '@angular/router';
import { LeadDetailsComponent } from './lead-details/lead-details.component';
import { InteractionsComponent } from './lead-details/interactions/interactions.component';
import { RecommandedProdutcsComponent } from './lead-details/recommanded-produtcs/recommanded-produtcs.component';
import { ProductStatsComponent } from './lead-details/product-stats/product-stats.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path : '', component: LeadComponent  },
  { path : 'lead-details/:id', component:LeadDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    LeadComponent,
    LeadDetailsComponent,
    InteractionsComponent,
    RecommandedProdutcsComponent,
    ProductStatsComponent
  ]
})
export class LeadsModule { 
  constructor(){
    console.log('Lead module loaded...');
  }
}
