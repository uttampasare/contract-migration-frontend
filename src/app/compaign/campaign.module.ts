import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CampaignLeadsComponent } from './campaign-details/campaign-leads/campaign-leads.component';
import { CampaignOpportunityComponent } from './campaign-details/campaign-opportunity/campaign-opportunity.component';
import { LeadProductsComponent } from './campaign-details/campaign-leads/lead-products/lead-products.component';
import { DashboardComponent } from './campaign-details/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CriteriaModalComponent } from './campaign-details/criteria-modal/criteria-modal.component';

const routes: Routes = [  
  { 
     path : 'campaign-details/:id', component:CampaignDetailsComponent
   }
 ];

@NgModule({
  imports: [
    NgbModule.forRoot(),
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  entryComponents : [
    CriteriaModalComponent
  ],
  declarations: [
    CampaignsComponent,
    CampaignDetailsComponent,
    PageNotFoundComponent,
    CampaignLeadsComponent,
    CampaignOpportunityComponent,
    LeadProductsComponent,
    DashboardComponent,
    CriteriaModalComponent
  ]
})
export class CampaignModule { }
