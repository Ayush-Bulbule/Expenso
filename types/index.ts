export type Transaction = {
    id?: number;
    amount: number;
    title: string;
    category: string;
    type: "Expense" | "Income";
    timestamp: number;
}


