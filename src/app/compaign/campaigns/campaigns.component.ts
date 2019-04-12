import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../service/campaign.service';
import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.less']
})
export class CampaignsComponent implements OnInit {

  columns : string[];
  data : Customer[] = [];
  constructor(private campaignService : CampaignService) { }

  ngOnInit() {
    this.columns = this.campaignService.getColumns();
    this.campaignService.getCampaigns().subscribe(res => {
      this.data = res;
    });
  }

}
