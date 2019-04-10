import { NgModule } from '@angular/core';
import { QuoteComponent } from './quote/quote.component';
import { Routes, RouterModule } from '@angular/router';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path : '', component: QuoteComponent  },
  { path : 'quote-details/:id', component:QuoteDetailsComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    QuoteComponent,
    QuoteDetailsComponent
  ]
})
export class QuotesModule { 
  constructor(){
    console.log('Quotes module loaded...');
  }
}
