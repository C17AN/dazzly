import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        margin: 0;
        font-family: "Noto Sans Kr";
        &::-webkit-scrollbar {
            display: none;
        }
    -webkit-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    }
    body {
        font-family: 'NanumSquare';
        @font-face {
            font-family: 'KyoboHand';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/KyoboHand.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        @font-face {
            font-family: 'SDSamliphopangche_Outline';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        @font-face {
            font-family: 'Cafe24Ssukssuk';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Ssukssuk.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
    }
`;
