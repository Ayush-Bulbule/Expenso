import CONSTANTS from "@/constants";
import { Transaction } from "@/types";
import * as SQLite from "expo-sqlite"

// Expense Repository
class TransactionRepository {

    private db: SQLite.SQLiteDatabase;

    constructor() {
        this.db = SQLite.openDatabaseSync(CONSTANTS.DB.NAME);
    }   

    // Get All Expenses
    async getAllTransactions(): Promise<any[]>{
        try{
            const query = `SELECT * FROM ${CONSTANTS.DB.TRANSACTIONS_TABLE};`;
            return await this.db.getAllAsync(query);
        }catch(err){
            console.error("Error fetching expenses:", err);
            throw err;
        }
    }

    // Add an Expense 
    async addTransaction(transaction: Transaction): Promise<void>{
        try{
            const query = `
                INSERT INTO ${CONSTANTS.DB.TRANSACTIONS_TABLE} (title, amount, category, type, timestamp) 
                VALUES ('${transaction.title}', ${transaction.amount}, '${transaction.category}', '${transaction.type}', ${transaction.timestamp});`;
            await this.db.execAsync(query);
            console.log("Transaction added successfully");
        }catch(err){
            console.error("Error adding expense:", err);
            throw err;
        }
    }

    // Update an Transaction
    async updateTransaction(transaction: Transaction): Promise<void>{
        try{
            const query = `
                UPDATE ${CONSTANTS.DB.TRANSACTIONS_TABLE} 
                SET title = '${transaction.title}', amount = ${transaction.amount}, category = '${transaction.category}', type = '${transaction.type}', timestamp = ${transaction.timestamp}
                WHERE id = ${transaction.id};`;
            await this.db.execAsync(query);

        }catch(err){
            console.error("Error updating expense:", err);
            throw err;
        }
    }

    // Delete all Transactions
    async deleteAllTransactions(): Promise<void>{
        try{
            const query = `DELETE FROM ${CONSTANTS.DB.TRANSACTIONS_TABLE};`;
            await this.db.execAsync(query);
        }catch(err){
            console.error("Error deleting expenses:", err);
            throw err;
        }
    }
}


export default new TransactionRepository();