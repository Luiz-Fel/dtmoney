
import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModelProps {
    openModal: boolean,
    closeModal: () => void,
}

export function NewTransactionModel({openModal,closeModal} : NewTransactionModelProps) {
    
    return(
        <Container>

    <Modal 
    isOpen={openModal} 
    onRequestClose={closeModal}>
        <h2>Inserir transação</h2>
    </Modal>
        </Container>
);}