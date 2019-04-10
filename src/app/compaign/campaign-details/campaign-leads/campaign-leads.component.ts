import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { Lead } from 'src/app/model/lead.model';
import { Product } from 'src/app/model/product.model';
import { CampaignService } from '../../service/campaign.service';

@Component({
  selector: 'app-campaign-leads',
  templateUrl: './campaign-leads.component.html',
  styleUrls: ['./campaign-leads.component.less']
})
export class CampaignLeadsComponent implements OnInit {

  leads : Lead[];
  products : Product[];
  
  constructor(private sharedService : SharedService, 
    private cs : CampaignService) { }

  ngOnInit() {
    this.sharedService.getCustomers().subscribe( res => {
        this.leads = res;
    });

    this.cs.getProductsByCustomerId();
  }

  setCustomer( customerId : string){
    this.sharedService.setCustomerId(customerId);
  }
}
