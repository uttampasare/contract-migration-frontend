import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CriteriaService } from '../../service/criteria.service';
import { CriteriaModalComponent } from '../criteria-modal/criteria-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  name : string = 'hello';

  constructor(private modal: NgbModal, private criteriaService : CriteriaService) {}

  ngOnInit() {
    this.criteriaService.criteria$.subscribe(message =>
       console.log(message)
    );
  }

  modify() {
    this.modal.open(CriteriaModalComponent);
  }

}
