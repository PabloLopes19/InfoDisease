import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background: #ccc;
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
export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--areaBackground);
    border-radius: 6px;
    padding: 0 10px;
    width: 90%;
    margin-top: 20px;
    box-shadow: 0px 0px 23px 3px rgba(0, 0, 0, 0.09);
`;
export const InputDate = styled.input``;
export const CardsArea = styled.div``;