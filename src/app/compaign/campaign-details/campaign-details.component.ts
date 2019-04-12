import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.less']
})
export class CampaignDetailsComponent implements OnInit {

  campaignId : string;
  operation : string = 'Dashboard';
  constructor() { }

  ngOnInit() {

  }

  
  loadCampaignDetails(operation : string){
    this.operation = operation;
  }

}
