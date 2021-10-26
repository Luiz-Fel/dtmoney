
import Modal from "react-modal";
import closeImg from "../../assets/CloseImg.svg"
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import incomeImg from "../../assets/Entradas.svg"
import outcomeImg from "../../assets/Saidas.svg"
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModelProps {
    openModal: boolean,
    closeModal: () => void,
}

export function NewTransactionModel({openModal,closeModal} : NewTransactionModelProps) {
    
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');


    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        const data = {
            title,
            value,
            type,
            category,
        };

        api.post('/transactions', data)
    };

    return(

    <Modal 
    isOpen={openModal} 
    onRequestClose={closeModal}
    overlayClassName="overlay-react-modal"
    className="react-modal">
        <button type="button" onClick={closeModal} className="react-modal-close">
            <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>

        <h2>Cadastrar transação</h2>

        <input type="text"
        placeholder="Título"
        value={title} 
        onChange={event => setTitle(event.target.value)}
        />

        <input type="number" 
        placeholder="Valor"
        value={value}
        onChange={event => setValue(Number(event.target.value))}/>

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