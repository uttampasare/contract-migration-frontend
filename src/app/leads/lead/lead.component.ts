import { Component, OnInit } from '@angular/core';
import { LeadService } from '../service/lead.service';
import { Lead } from 'src/app/model/lead.model';

@Component({
  selector: 'lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.less']
})
export class LeadComponent implements OnInit {

  columns : string[];
  leads : Lead[] = [];
  constructor(private leadService : LeadService) { }

  ngOnInit() {
    this.columns = this.leadService.getColumns();
    this.leadService.getLeads().subscribe(leads => {
      this.leads = leads;
    });
  }

}
