import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeadService } from '../service/lead.service';


@Component({
  selector: 'lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.less']
})
export class LeadDetailsComponent implements OnInit {
  operation : string = "INTERACTIONS";
  constructor(private route: ActivatedRoute, private leadService : LeadService) { }

  ngOnInit() {
    let leadId = this.route.snapshot.paramMap.get('id');
    this.leadService.setLeadId(leadId);
  }

  loadLeadDetails(operation : string){
    this.operation = operation;
  }

}
