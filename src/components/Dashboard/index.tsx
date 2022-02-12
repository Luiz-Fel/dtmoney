import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./styles";
const transactions = [{
    id: 1,
    title: 'Compras',
    type: 'withdraw',
    category: 'Despesas',
    amount: 600,
    createdAt: String(new Date('2021-02-12 09:00:00'))
  },
  {
    id: 2,
    title: 'Aluguel',
    type: 'deposit',
    category: 'Pagamentos',
    amount: 2200,
    createdAt: String(new Date('2021-02-12 09:00:00 13:00:00'))
  }] 

  localStorage.setItem('transactions', JSON.stringify(transactions))
export function Dashboard() {
    return (
        <Container>
        
           <Summary transactions={transactions} />
           <TransactionTable  transactions={transactions}/>
        </Container>
    )
}