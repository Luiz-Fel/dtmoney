
import { useTransactions } from "../../hooks/UseTransactions";
import Modal from "react-modal";
import { FormEvent, useState } from "react";


import closeImg from "../../assets/CloseImg.svg"
import incomeImg from "../../assets/Entradas.svg"
import outcomeImg from "../../assets/Saidas.svg"

import { Container, TransactionTypeContainer, RadioBox, MoneySign } from "./styles";


interface NewTransactionModelProps {
    openModal: boolean,
    closeModal: () => void,
}

export function NewTransactionModal({openModal,closeModal} : NewTransactionModelProps) {
    
    const { createTransaction } = useTransactions()

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');


    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        });
        setType("deposit");
        setAmount(0);
        setCategory("");
        setTitle("");
        closeModal();
    };

    return(

    <Modal 
    isOpen={openModal} 
    onRequestClose={closeModal}
    overlayClassName="overlay-react-modal"
    className="react-modal">
        <button type="button" onClick={() => {
            setType("deposit");
            setAmount(0);
            setCategory("");
            setTitle("");
            closeModal()
            }} className="react-modal-close">
            <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={(event) => {
            setAmount(Number(amount))
            handleCreateNewTransaction(event)}}>

            <h2>Cadastrar transação</h2>

            <input type="text"
            placeholder="Título"
            value={title} 
            onChange={event => setTitle(event.target.value)}
            />
            <MoneySign>R$</MoneySign>
            <input type="text"
            pattern="[0-9]*" 
            placeholder="Valor"
            value={amount}
            onChange={(event) => {setAmount(Number(event.target.value))}}
            style={{
                paddingLeft: '2rem',
            }}/>

            <TransactionTypeContainer>
                <RadioBox
                isActive={type === "deposit"}
                activeColor = "green"
                onClick={() => {
                    setType("deposit")
                }}
                type="button">
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox 
                isActive={type === "withdraw"}
                activeColor = "red"
                onClick={() => {
                    setType("withdraw")
                }}
                type="button">
                    <img src={outcomeImg} alt="" />
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>
            <input type="text" 
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
            />


            <button type="submit" >Cadastrar</button>
        </Container>

    </Modal>
);}