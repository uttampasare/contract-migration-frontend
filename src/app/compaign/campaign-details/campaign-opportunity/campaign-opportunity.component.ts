import { Component, OnInit } from '@angular/core';
import { Lead } from 'src/app/model/lead.model';
import { SharedService } from 'src/app/shared/shared/shared.service';

@Component({
  selector: 'app-campaign-opportunity',
  templateUrl: './campaign-opportunity.component.html',
  styleUrls: ['./campaign-opportunity.component.less']
})
export class CampaignOpportunityComponent implements OnInit {

  opportunities : Lead[];
  constructor(private sharedService : SharedService) { }

  ngOnInit() {
    this.sharedService.getCustomers().subscribe( res => {
        this.opportunities = res;
    });
  }

}
