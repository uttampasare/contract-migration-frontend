import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { CampaignService } from 'src/app/compaign/service/campaign.service';

@Component({
  selector: 'lead-products',
  templateUrl: './lead-products.component.html',
  styleUrls: ['./lead-products.component.less']
})
export class LeadProductsComponent implements OnInit {

  products : Product[];
  constructor(private cs : CampaignService) { }

  ngOnInit() {
    this.cs.getProducts().subscribe( res => {
      console.log(' LeadProductsComponent init -- products loaded  ');
      this.products= res;
    });
  }

 

}
