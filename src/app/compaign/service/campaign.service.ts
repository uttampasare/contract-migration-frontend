import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/product.model';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { Customer } from 'src/app/model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  headers: string[];
  subject = new Subject<Product[]>();
  
  constructor(private http : HttpClient, private sharedService : SharedService) { }

  public getColumns(): string[]{
    return ["Campaign ID", "Column 2", "Column 3"];
  }

  getCampaigns(): Observable<any>{
    return this.http.get('assets/campaigns.json');
  }

  setProducts(p : Product[]){
    this.subject.next(p)
  }

  getProducts() : Observable<Product[]>{
    return this.subject.asObservable();
  }
  
  getCustomers(): Observable<Customer[]>{
    return this.sharedService.getCustomers();
  }

  getProductsByCustomerId(){
    this.sharedService.getCustomerId().subscribe( customerId => {
      console.log('SelectedCustomerId --' + customerId);

      this.sharedService.getCustomers().subscribe( rs => {
        rs.filter(
          cust => cust.id === customerId
        ).map( c => {
          this.setProducts(c.products);
        });
      });
    });
  }

}
