import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`;

export const InputArea = styled.div`
    width: 80%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 2px solid rgba(0, 0, 0, 0.6);
`;
export const InputText = styled.select`
    width: 80%;
    height: 30%;
    font-size: 25px;
    padding-left: 30px;
    font-weight: bold;
    color: #272727;
`;
export const InputDate = styled.input``;
export const CardsArea = styled.div``;