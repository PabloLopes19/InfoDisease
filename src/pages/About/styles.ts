import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const PageTitle = styled.h1`
    width: 70%;
    height: 121px;
    margin-top: 100px;
    font-size: 70px;
    text-align: center;
    color: var(--textTitle);
    padding-bottom: 10px;
    border-bottom: 2px solid var(--textDescription);
`;

export const PeopleTitle = styled.h1`
    width: 70%;
    margin-top: 50px;
    font-size: 25px;
    color: var(--textTitle);
    /* background: blue; */
    text-align: center;
`;

export const RepButton = styled.a`
    width: 20%;
    background: #3498DB;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    transform: translateY(50px);
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s;

    &:hover{
        color: #eee;
    }
`;