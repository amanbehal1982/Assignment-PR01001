import { Component, OnInit } from '@angular/core';
import { OffTransactions } from './off-transactions';

@Component({
  selector: 'app-off-transactions',
  templateUrl: './off-transactions.component.html',
  styleUrls: ['./off-transactions.component.scss']
})
export class OffTransactionsComponent implements OnInit {

  public TransactionList = [
    new OffTransactions('02/20/2020','Misc Expenses',null,3000,1215),
    new OffTransactions('02/18/2020','Printing sheets for office documents',null,285,4215),
    new OffTransactions('02/18/2020','Snacks Party',null,500,4500),
    new OffTransactions('02/17/2020','Credited to Office Account',5000,null,5000)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  receiveValue(event){
    this.TransactionList.unshift(event);
  }

}
