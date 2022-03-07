import { useTransactions } from "../../hooks/UseTransactions";
import { Container, EmptyContainer } from "./styles";

interface TransactionProps {
        
    transactions: {
        id: number;
        title: string;
        type: string;
        category: string;
        amount: number;
        createdAt: string;
    }[]
}



export function TransactionTable() {
  
    const {transactions, setTransactions} = useTransactions()



    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                }).format(transaction.amount)
                                }</td>
                            <td>{transaction.category}</td>
                            <td>{new Intl.DateTimeFormat("pt-BR", {})
                            .format(new Date(transaction.createdAt))
                            }</td>
                        </tr> ) )}
                </tbody>
            </table>
             {transactions.length === 0 && (
             <EmptyContainer>
                        <h2>Sem transações...</h2>
                       <p>Tente adicionar uma nova transação clicando em "Nova transação".</p>
            </EmptyContainer>
            )}
        </Container>
    );
}