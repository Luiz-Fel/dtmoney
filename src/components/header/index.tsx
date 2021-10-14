import { GlobalStyle } from "../../styles/global";
import  logoImg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

export function Header() {
    return (
    <Container>
        <Content>
            <a href="">
                <img src={logoImg} alt="dt money" />
            </a>
            <button type="button">Nova transação</button>
        </Content>
    </Container>
    )}