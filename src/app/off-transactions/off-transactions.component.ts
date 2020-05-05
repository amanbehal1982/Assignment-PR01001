import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-off-transactions',
  templateUrl: './off-transactions.component.html',
  styleUrls: ['./off-transactions.component.scss']
})
export class OffTransactionsComponent {

  
  transactionList: Array<Transaction> = this.dataService.transactionList;


  constructor( private readonly dataService: DataService ) { }

  receiveValue(transaction: Transaction){
    this.dataService.addTransaction(transaction);
  }

}
