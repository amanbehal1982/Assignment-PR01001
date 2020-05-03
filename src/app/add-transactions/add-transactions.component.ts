import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddTransactions } from './add-transactions';

@Component({
  selector: 'app-add-transactions',
  templateUrl: './add-transactions.component.html',
  styleUrls: ['./add-transactions.component.scss']
})
export class AddTransactionsComponent implements OnInit {


  model = new AddTransactions('','','',null,null,null);

  @Input('transactionList') transDetails; 

  @Output() modelValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.modelValue.emit(this.model);
  }

}
