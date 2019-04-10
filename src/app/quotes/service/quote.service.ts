import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  headers: string[];
  constructor(private http : HttpClient) { }

  public getColumns(): string[]{
    return ["Quote ID", "Column 2", "Column 3"];
  }

  public getData(): Observable<any>{
    return this.http.get('assets/quotes.json');
  }
}
