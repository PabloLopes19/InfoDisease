import styled from 'styled-components';

export const Container = styled.div`
    height: 100%; width: 70%;
    display: flex;
    flex-direction: column;
    background: var(--background);
    color: var(--textDescription);
    /* padding: 5px 20px; */
    position: fixed;
    left: -100%;
    top: 0;
    z-index: 2;
    box-shadow: 0 0 70px rgba(0, 0, 0, 0.1);
    animation-name: Menu;
    animation-duration: 0.3s;
`;

