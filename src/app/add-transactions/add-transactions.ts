export class AddTransactions {
    constructor(
        public date:string,
        public transaction: string,
        public descption:string,
        public credit:number,
        public debit:number,
        public runnigBalance:number
    ){}
}
