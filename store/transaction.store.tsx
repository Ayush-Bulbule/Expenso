// Transaction Store
import { create } from "zustand"
import { Transaction } from "@/types"
import transactionsRepository from "@/data/transactions.repository"

interface TransactionStore {
    transactions: Transaction[],
    fetchTransactions: () => Promise<void>,
    addTransaction: (transaction: Omit<Transaction, "id">) => void,
    deleteTransaction: (id: string) => void,
    updateTransaction: (transaction: Transaction) => void,
    deleteAllTransactions: () => void
}

const useTransactionStore = create<TransactionStore>((set) => ({
    // code here 
    transactions: [],

    // fetch Transactions
    fetchTransactions: async () => {
        try {
            const transactions = await transactionsRepository.getAllTransactions();
            set({ transactions });
        } catch (error) {
            console.error('Failed to fetch transactions:', error);
        }
    },

    addTransaction: async (transactionData) => {
        try {
            const newTransaction = await transactionsRepository.addTransaction(transactionData);
            set((state) => ({ 
                ...state,
                transactions: [newTransaction, ...state.transactions] 
              }));
        } catch (error) {
            console.error('Failed to add transaction:', error);
        }
    },

    // delete
    deleteTransaction: async (id: string) => {
        try {
            await transactionsRepository.deleteTransaction(id)
            set((state) => ({
                transactions: state.transactions.filter((t) => t.id?.toString() !== id)
            }))
        } catch (error) {
            console.error(error)
        }
    },

    // update
    updateTransaction: async (transaction: Transaction) => {
        try {
            await transactionsRepository.updateTransaction(transaction)
            set((state) => ({
                transactions: state.transactions.map((t) => t.id === transaction.id ? transaction : t)
            }))
        } catch (error) {
            console.error(error)
        }
    },

    deleteAllTransactions: async () => {
        try {
            await transactionsRepository.deleteAllTransactions()
            set({ transactions: [] })
        } catch (error) {
            console.error(error)
        }
    }
}))


// Initial fetch function to be called
export const initilizeTransaction = ()=>{
    const {fetchTransactions } = useTransactionStore.getState();
    fetchTransactions();
}

export default useTransactionStore;