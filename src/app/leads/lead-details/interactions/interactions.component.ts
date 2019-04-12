import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../service/lead.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailViewModalComponent } from '../email-view-modal/email-view-modal.component';
import { Interaction } from 'src/app/model/interaction.model';

@Component({
  selector: 'lead-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.less']
})
export class InteractionsComponent implements OnInit {

  interactions : Interaction[];
  constructor(private leadService : LeadService, private modal: NgbModal) { }

  ngOnInit() {
    this.leadService.getInteractionsByLeadId();
    this.leadService.getInteractions().subscribe( inters => {
      this.interactions = inters;
    });
  }

  viewEmail() {
    let cfRef = this.modal.open(EmailViewModalComponent);
    cfRef.componentInstance.messageBody = "This is email message";
  }

}
