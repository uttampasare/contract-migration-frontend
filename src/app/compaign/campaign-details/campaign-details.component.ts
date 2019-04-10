import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.less']
})
export class CampaignDetailsComponent implements OnInit {

  campaignId : string;
  operation : string = 'Dashboard';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.campaignId = this.route.snapshot.paramMap.get('id');
    console.log(this.campaignId);
  }

  
  loadCampaignDetails(operation : string){
    this.operation = operation;
  }

}
