import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: "Roboto", sans-serif;
   }

   :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
   }
 
   body {
     background: ${(props) => props.theme["gray-900"]};
     color: ${(props) => props.theme["gray-300"]};
     -webnkit-font-smoothing: antialiased;
   }

   border-style, input-security, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
   }
 `;
