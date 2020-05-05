import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  runningBalance: number = 1215;
  transactionList: Array<Transaction> = [
    { date: '02/20/2020', description: 'Misc Expenses', amount: 3000, isCredit: false, runningBalance: 1215 },
    { date: '02/18/2020', description: 'Printing sheets for office documents', amount: 285, isCredit: false, runningBalance: 4215 },
    { date: '02/18/2020', description: 'Snacks Party', amount: 500, isCredit: false, runningBalance: 4500 },
    { date: '02/17/2020', description: 'Credited to Office Account', amount: 5000, isCredit: true, runningBalance: 5000 },
  ]

  constructor() { }

  addTransaction(transaction: Transaction) {
    this.runningBalance = transaction.isCredit
        ? this.runningBalance + transaction.amount
        : this.runningBalance - transaction.amount;        
    const newTransaction = {
      ...transaction,
      runningBalance: this.runningBalance,
    };
    this.transactionList.unshift(newTransaction);
  }
}
