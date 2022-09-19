import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import variables from './GlobalVariables';

const GlobalStyle = createGlobalStyle`

:root {
    ${variables}
}
${reset} 


* {
    box-sizing: border-box;
    
}
html,body{
    font-family: 'ChosunGu';
    display:flex;
    justify-content:center;


}


button {
    cursor: pointer;
    font-weight: 700;
    font-family: 'ChosunGu';

}
input{
    font-family: 'ChosunGu';

}
`;

export default GlobalStyle;
