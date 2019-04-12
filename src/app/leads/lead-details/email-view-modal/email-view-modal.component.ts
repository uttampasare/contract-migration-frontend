import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-email-view-modal',
  templateUrl: './email-view-modal.component.html',
  styleUrls: ['./email-view-modal.component.less']
})
export class EmailViewModalComponent implements OnInit {

  messageBody : string = '';
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  done(){
    this.activeModal.close();
  }
}
