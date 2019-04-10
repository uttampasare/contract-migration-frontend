import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { Interaction } from 'src/app/model/interaction.model';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  subject = new Subject<Interaction[]>();
  headers: string[];
  constructor(private http : HttpClient, private sharedService : SharedService) { }

  public getColumns(): string[]{
    return ["Lead ID", "Customer Name", "Service Address"];
  }

  getData(): Observable<any>{
    return this.http.get('assets/leads.json');
  }

  setInteractions(interactions : Interaction[]){
    this.subject.next(interactions);
  }

  getInteractions() : Observable<Interaction[]>{
    return this.subject.asObservable();
  }

  showInteractions(){
    this.sharedService.setCustomerId('2344323');
    this.sharedService.getCustomerId().subscribe( customerId => {
        this.sharedService.getCustomers().subscribe( customers => {
          customers.filter( customer => customer.id == customerId).map( c =>{
            this.setInteractions(c.interactions);
          });
        });
    });
  }
 
}
