import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        ${(props) => {
            const theme = props.theme;

            let append = '';
            Object.entries(theme).forEach(([prop, value]) => {
                append += `--${prop}: ${value};`;
            })

            return append;
        }}
    }
`;