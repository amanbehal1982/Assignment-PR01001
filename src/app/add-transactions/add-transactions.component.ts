import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../models/transaction.model';


@Component({
  selector: 'app-add-transactions',
  templateUrl: './add-transactions.component.html',
  styleUrls: ['./add-transactions.component.scss']
})
export class AddTransactionsComponent {


  transName = ['Credit', 'Debit'];
  selectedTransactionType: string;

  model: Transaction = {
    date: "",
    description: "",
    isCredit: null,
    amount: null,
    runningBalance: null
  };

  @Input('transactionList') transDetails;

  @Output() modelValue = new EventEmitter<any>();



  constructor() {
  }


  onSubmit() {
    const updatedModel = { ...this.model };
    updatedModel.isCredit = this.selectedTransactionType === 'Credit';
    this.modelValue.emit(updatedModel);
  }


  resetSubmit() {
    this.model = {
      date: "",
      description: "",
      isCredit: null,
      amount: null,
      runningBalance: null
    };
  }


}
