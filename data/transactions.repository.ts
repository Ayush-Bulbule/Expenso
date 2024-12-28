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
    async getAllTransactions(): Promise<any[]> {
        try {
            const query = `SELECT * FROM ${CONSTANTS.DB.TRANSACTIONS_TABLE};`;
            return await this.db.getAllAsync(query);
        } catch (err) {
            console.error("Error fetching expenses:", err);
            throw err;
        }
    }

    // Add an Expense 
    async addTransaction(transaction: Transaction): Promise<Transaction> {
        try {
            const query = `
                INSERT INTO ${CONSTANTS.DB.TRANSACTIONS_TABLE} (title, amount, category, type, timestamp) 
                VALUES ('${transaction.title}', ${transaction.amount}, '${transaction.category}', '${transaction.type}', ${transaction.timestamp});`;
            await this.db.execAsync(query);
            console.log("Transaction added successfully");
            return transaction;
        } catch (err) {
            console.error("Error adding expense:", err);
            throw err;
        }
    }

    // Update an Transaction
    async updateTransaction(transaction: Transaction): Promise<void> {
        try {
            const query = `
                UPDATE ${CONSTANTS.DB.TRANSACTIONS_TABLE} 
                SET title = '${transaction.title}', amount = ${transaction.amount}, category = '${transaction.category}', type = '${transaction.type}', timestamp = ${transaction.timestamp}
                WHERE id = ${transaction.id};`;
            await this.db.execAsync(query);

        } catch (err) {
            console.error("Error updating expense:", err);
            throw err;
        }
    }

    // Delete all Transactions
    async deleteAllTransactions(): Promise<void> {
        try {
            const query = `DELETE FROM ${CONSTANTS.DB.TRANSACTIONS_TABLE};`;
            await this.db.execAsync(query);
        } catch (err) {
            console.error("Error deleting expenses:", err);
            throw err;
        }
    }

    // Delete a Transaction
    async deleteTransaction(id: string): Promise<void> {
        try {
            const query = `DELETE FROM ${CONSTANTS.DB.TRANSACTIONS_TABLE} WHERE id = ${id};`;
            await this.db.execAsync(query);
        } catch (err) {
            console.log("Error deleting expense:", err);
            throw err;
        }
    }

    // fetch balance
    async fetchBalance(): Promise<any> {
        try {
            const query = `SELECT SUM(CASE WHEN type = 'Income' THEN amount ELSE 0 END) - SUM(CASE WHEN type = 'Expense' THEN amount ELSE 0 END) AS balance FROM ${CONSTANTS.DB.TRANSACTIONS_TABLE};`;
            const result: { balance: string }[] = await this.db.getAllAsync(query);
            return result[0].balance;
        } catch (err) {
            console.error("Error fetching balance:", err);
            throw err;
        }
    }

    // Get Expenses by Category
    async getExpnesesByCategory(): Promise<any[]> {
        try {
            const query =  `SELECT * FROM transactions`; 

            const result = await this.db.getAllAsync(query);
            console.log("Result :", result);
            return result;
        } catch (err) {
            console.error("Error fetching expenses by category:", err);
            throw err;
        }
    }

    // get Total Expense
    async getTotalExpense(): Promise<any> {
        try {
            const query =  `SELECT * FROM transactions`; 

            const result = await this.db.getAllAsync(query);
            console.log("Result :", result);
            return result;
        } catch (err) {
            console.error("Error fetching total expenses:", err);
            throw err;
        }
    }

    //get Day Wise data
    async getWeeklyData(): Promise<any> {
        try {
            // const query = ``;
            // const result = await this.db.getAllAsync(query)
            // console.log("Week: ", result)
            // return result;
            // const query =  `SELECT * FROM transactions`; 

            console.log("Will Build this later!!!");
        } catch (err) {
            console.log("Error fetching total expenses:", err);
            throw err;
        }
    }

    // Day Wise Query
    async getExpenseByDay(): Promise<any> {
        try {
            const query =  `SELECT * FROM transactions`; 
    

            const result = await this.db.execAsync(query);
            console.log("Data: ")
            console.log(result);
            return result;
        } catch (err) {
            console.log("Error fetching total expense", err);
            throw err;
        }
    }

}


export default new TransactionRepository();