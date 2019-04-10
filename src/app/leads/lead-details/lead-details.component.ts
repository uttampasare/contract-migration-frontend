import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.less']
})
export class LeadDetailsComponent implements OnInit {

  operation : string = "INTERACTIONS";
  constructor() { }

  ngOnInit() {
    
  }

  loadLeadDetails(operation : string){
    this.operation = operation;
  }

}
