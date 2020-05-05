export interface Transaction {
    date: string;
    description: string;
    amount: number;
    isCredit: boolean;
    runningBalance: number;
  }