import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
    * {
        border-radius:0.25rem;
        height: 4rem
    }
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        font-family: var(--font-text);
        background: #E7E9EE;
        border: 1px solid #D7D7D7;
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }
        input[type=number] {
        -moz-appearance: textfield;
        }

        font-weight: 400;
        font-size: 1rem;

        & + input {
            margin-top: 1rem;
        }

        &::placeholder {
            color: var(--text-body);
        }
    }
    
    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        background-color: var(--green);
        height: 4rem;
        width: 100%;
        border: transparent;;
        font: var(---text-title);
        font-weight: 600;
        color: #FFF;
        margin-top: 1.5rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
}
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

 
`

const colors = {
    green: "#33CC95",
    red: "#E52E4D",

}

interface RadioBoxProps {
    isActive: Boolean,
    activeColor: "green" | "red",
}

export const RadioBox = styled.button<RadioBoxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #d7d7d7;
    transition: border-color 0.2s;

    background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
     : 'transparent'};
    
    &:hover {
                border-color: ${darken(0.2, "#d7d7d7")};
            }
        

    span {
            display: inline-block;
            height: 1.5rem;
            font-size: 1rem;
            color: var(--text-title);
            margin-left: 1rem;
        }

    img {
            width: 20px;
            height: 20px;
        }
`        