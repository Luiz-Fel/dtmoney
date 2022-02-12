import { Container } from "./styles";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saidas.svg";
import $Img from "../../assets/Total.svg" 
import { useTransactions } from "../../hooks/UseTransactions";

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

export function Summary(props : TransactionProps) {

    const { transactions, setTransactions } = useTransactions();
    
    if (transactions.length === 0) {
        setTransactions(props.transactions)
    }
 
    const summary = transactions.reduce((acc , transaction) => {
        if (transaction.type === "deposit") {
         acc.deposits += transaction.amount;
         acc.total += transaction.amount;
        } 

        if (transaction.type === "withdraw") {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{ new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }
                ).format(summary.deposits)}</strong>
            </div> 
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>-{ new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }
                ).format(summary.withdraws)}</strong>
            </div> 
            <div className={`highlight-background 
            ${summary.total >= 0 ?
             "positive" : "negative"}`}>
                <header>
                    <p>Total</p>
                    <img src={$Img} alt="Total" />
                </header>
                <strong>{ new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }
                ).format(summary.total)}</strong>
            </div>
        </Container>
    )
};