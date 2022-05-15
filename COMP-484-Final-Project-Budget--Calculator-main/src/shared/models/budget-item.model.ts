export class BudgetItem {
//The two properties will help us distinguish what's an an earning and what's a loss
    constructor(public description: string, public amount: number) { }
    //constructor(public date: string, public description: string, public amount: number)  
}