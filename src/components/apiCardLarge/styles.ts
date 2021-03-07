import styled from 'styled-components';

export const Container = styled.div`
    width: 60%; height: 160px;
    border-radius: 6px;
    background: var(--areaBackground);
    box-shadow: 13px 14px 0px var(--shadow);
    margin-top: 40px;
`;
export const ContainerTop = styled.div`
    /* background: yellow; */
    width: 100%; height: 40%;
    /* padding: 20px 20px; */
    margin-top: 10px;
    display: flex;
    align-items: center;
`;
export const ContainerTopRight = styled.div`
    /* background: blue; */
    width: 72%; height: 70%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 30px;
`;
export const ContainerTopLeft = styled.div`
    /* background: brown; */
    width: 28%; height: 70%;
    display: flex;
    padding: 0 20px;
    flex-direction: column;
    border-right: 1px solid var(--textTitle);
`;
export const Bottom = styled.div`
    /* background: green; */
    width: 100%;
    height: 60%;
    padding: 10px 20px;
    color: var(--textDescription);
`;
export const AccessButton = styled.p`
    background: var(--blue);
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    font-size: 15px;
    padding: 5px 50px;
    border-radius: 35px;
    transition: all 0.2s;

    &:hover{
        opacity: 0.6;
    }
`;