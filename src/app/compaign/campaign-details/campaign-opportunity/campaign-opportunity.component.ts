import { Component, OnInit } from '@angular/core';
import { Lead } from 'src/app/model/lead.model';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-campaign-opportunity',
  templateUrl: './campaign-opportunity.component.html',
  styleUrls: ['./campaign-opportunity.component.less']
})
export class CampaignOpportunityComponent implements OnInit {

  opportunities : Customer[];
  constructor(private sharedService : SharedService) { }

  ngOnInit() {
    this.sharedService.getCustomers().subscribe( res => {
        this.opportunities = res;
    });
  }

}
