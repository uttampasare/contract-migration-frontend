import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../service/lead.service';

@Component({
  selector: 'lead-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.less']
})
export class InteractionsComponent implements OnInit {

  interactions : any[];
  constructor(private leadService : LeadService) { }

  ngOnInit() {
    this.leadService.showInteractions();
    this.leadService.getInteractions().subscribe( interactions => {
      this.interactions = interactions;
    });
  }

}
