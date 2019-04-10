import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriteriaService {

  private criteria = new Subject();
  criteria$ = this.criteria.asObservable();
  
  constructor() { }

  changeMessage(message: string) {
    this.criteria.next(message)
  }
}
