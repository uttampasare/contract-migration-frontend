import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Customer } from 'src/app/model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  headers: string[];
  customerSubject = new Subject();
  constructor(private http : HttpClient) { }

  setCustomerId(customerId : string){
    this.customerSubject.next(customerId);
  }

  getCustomerId() : Observable<any>{
    return this.customerSubject.asObservable();
  }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>('assets/customer-detailed.json');
  }

}