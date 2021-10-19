import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --blue : #5429CC;
    --red: #E52E4D;
    --green: #33CC95;
    --blue-light: #6933ff;

    --text-title: #363F5F;
    --text-body: #969CB2;
    --background-dashboard: #F0F2F5;
    --background: #ffffff;


}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--background-dashboard);
    -webkit-font-smoothing: antialised;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

// font-size
html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
`