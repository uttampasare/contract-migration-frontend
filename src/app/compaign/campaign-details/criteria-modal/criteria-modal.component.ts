import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CriteriaService } from 'src/app/compaign/service/criteria.service';

@Component({
  selector: 'app-criteria-modal',
  templateUrl: './criteria-modal.component.html',
  styleUrls: ['./criteria-modal.component.less']
})
export class CriteriaModalComponent implements OnInit {

  name : string;
  
  constructor(public activeModal: NgbActiveModal, private cs : CriteriaService) { }

  ngOnInit() {
  }

  save(){
    this.cs.changeMessage(this.name);
    this.activeModal.close();
  }

  

}
