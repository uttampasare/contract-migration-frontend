import { NgModule } from '@angular/core';
import { LeadComponent } from './lead/lead.component';
import { Routes, RouterModule } from '@angular/router';
import { LeadDetailsComponent } from './lead-details/lead-details.component';
import { InteractionsComponent } from './lead-details/interactions/interactions.component';
import { RecommandedProdutcsComponent } from './lead-details/recommanded-produtcs/recommanded-produtcs.component';
import { ProductStatsComponent } from './lead-details/product-stats/product-stats.component';
import { CommonModule } from '@angular/common';
import { EmailViewModalComponent } from './lead-details/email-view-modal/email-view-modal.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderCollapseComponent } from './lead-details/header-collapse/header-collapse.component';

const routes: Routes = [
  { path : '', component: LeadComponent  },
  { path : 'lead-details/:id', component:LeadDetailsComponent }
];

@NgModule({
  imports: [
    NgbModule.forRoot(),
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  declarations: [
    LeadComponent,
    LeadDetailsComponent,
    InteractionsComponent,
    RecommandedProdutcsComponent,
    ProductStatsComponent,
    EmailViewModalComponent,
    HeaderCollapseComponent
  ],
  entryComponents : [
    EmailViewModalComponent
  ]
})
export class LeadsModule { 
  constructor(){
    console.log('Lead module loaded...');
  }
}
