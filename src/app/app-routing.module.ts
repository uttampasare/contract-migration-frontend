import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignModule } from './compaign/campaign.module';
import { CampaignsComponent } from './compaign/campaigns/campaigns.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : '', redirectTo : '/campaigns', pathMatch : 'full'
  },
  {
    path : 'campaigns', component : CampaignsComponent,
  },
  {
    path : 'leads', loadChildren:'./leads/leads.module#LeadsModule'
  },
  {
    path : 'quotes', loadChildren:'./quotes/quotes.module#QuotesModule'
  },
  {
    path : '**', component : PageNotFoundComponent
  }
];


@NgModule({
  imports: [
    CampaignModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
