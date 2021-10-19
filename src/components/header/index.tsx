import { GlobalStyle } from "../../styles/global";
import  logoImg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

interface PropsTransactionModal {
    openModalFunction: () => void,
}


export function Header({openModalFunction} :PropsTransactionModal) {
    return (
    <Container>
        <Content>
            <a href="">
                <img src={logoImg} alt="dt money" />
            </a>
            <button type="button" onClick={openModalFunction}>Nova transação</button>
        </Content>
    </Container>
    )}