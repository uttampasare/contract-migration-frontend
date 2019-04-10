import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../service/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.less']
})
export class QuoteComponent implements OnInit {

  columns : string[];
  data : any[] = [];
  constructor(private quoteService : QuoteService) { }

  ngOnInit() {
    this.columns = this.quoteService.getColumns();
    this.quoteService.getData().subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }
}
