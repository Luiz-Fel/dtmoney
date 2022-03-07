import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
    id: number,
    title: string,
    amount: number,
    category: string,
    createdAt: string,
    type: string
}

type TransactionInput = Omit<Transaction, "id" | "createdAt"> 

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[],
    createTransaction: (transaction : TransactionInput) => Promise<void>,
    setTransactions: Dispatch<SetStateAction<Transaction[]>>,
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    );

export function TransactionProvider({children} : TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])


    useEffect(() => {
           //api
           //.get<any>("/transactions")
           //.then((response ) => 
           //setTransactions(response.data.transactions)
           //);
              const transactionsStorage : string | null =(localStorage.getItem('transactions'))
              if (transactionsStorage) {
                setTransactions(JSON.parse(transactionsStorage))
              } else {
                localStorage.setItem('transactions', JSON.stringify(transactions))

              }
        }, []);


        async function createTransaction(transactionInput : TransactionInput) {
    
          //  const response = await api.post('/transactions', {
          //      ...transactionInput,
          //      createdAt: new Date(),
          //  });
          //  const {transaction} = response.data;
            const updatedTransactions = [...transactions, {
                ...transactionInput,
                createdAt: String(new Date()),
                id: transactions.length
            }]
            setTransactions(updatedTransactions)

            localStorage.setItem('transactions', JSON.stringify(updatedTransactions))
        }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction, setTransactions}}>
            {children}
        </TransactionsContext.Provider>
    )

   
}
    export function useTransactions() {
        const context = useContext(TransactionsContext);

    return context
}