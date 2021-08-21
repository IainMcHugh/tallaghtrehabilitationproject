import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
    
    @font-face {
        font-family: lemon-milk;
        src: url(./fonts/LEMONMILK-Regular.otf);
    }

    *, body {
    margin: 0;
    padding: 0;
    font-family: Poppins, sans-serif;
    }

    a {
        text-decoration: none;
    }

    ::-webkit-scrollbar {
    -webkit-appearance: none;
    -moz-appearance: none;
    }

    ::-webkit-scrollbar:vertical {
    width: 12px;
    }

    ::-webkit-scrollbar:horizontal {
    height: 12px;
    }

    ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: 4px solid #fff;
    }

    ::-webkit-scrollbar-track {
    border-radius: 10px;  
    background-color: transparent;
    overflow: overlay;
    }

    .background-image-container {
        margin-top: 100px;
    }

    @media only screen and (min-width: 768px){
        .background-image-container {
        margin-top: 200px;
    }
    }
`;

export default GlobalStyles;
