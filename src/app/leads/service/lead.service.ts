import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { Interaction } from 'src/app/model/interaction.model';
import { Lead } from 'src/app/model/lead.model';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  leadIdSubject = new Subject();
  interactionsSubject = new Subject<Interaction[]>();
  headers: string[];
  constructor(private http : HttpClient, private sharedService : SharedService) { }

  public getColumns(): string[]{
    return ["Lead ID", "Customer Name", "Service Address"];
  }

  getLeads(): Observable<Lead[]>{
    return this.http.get<Lead[]>('assets/leads.json');
  }
  
  setLeadId(leadId : string){
    this.leadIdSubject.next(leadId);
  }

  getLeadId() : Observable<any>{
    return this.leadIdSubject.asObservable();
  }

  setInteractions(inters : Interaction[]){
    this.interactionsSubject.next(inters);
  }

  getInteractions() : Observable<Interaction[]>{
    return this.interactionsSubject.asObservable();
  }

  getInteractionsByLeadId(){
    this.getLeadId().subscribe(leadId => {
      this.getLeads().subscribe( lead => {
        lead.filter(
          l => l.id === leadId
        ).map( fLead => {
          this.setInteractions(fLead.interactions);
        });
      });
    });
  }
 
}
