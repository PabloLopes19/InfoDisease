import styled from 'styled-components';

import { WiCloud } from 'react-icons/wi'

export const Container = styled.div`
    width: 300px;
    height: 350px;
    background: #fff;
    box-shadow: 0px 0px 17px 1px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    cursor: pointer;
    border: 3px solid transparent;
    transition: all 0.2s;


    &:hover{
        border: 3px solid #3498DB;
    }
`;
export const CardHeader = styled.h1`
    font-size: 30px;
    color: #000;
    margin-top: 30px;
`;
export const WeatherContent = styled.div`   
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: center;
`;
export const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
`;
export const WeatherIcon = styled(WiCloud)`
    fill: #3498DB;
    height: 150px; width: 150px;
    /* transform: translateX(30px); */
`;
export const Right = styled.div`
    /* background: blue; */
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

`;
export const Temp = styled.h1`
    color: #000;
    font-size: 50px;
    text-align: left;
`;
export const Desc = styled.p`
    color: rgba(0, 0, 0, 0.6);
    font-size: 15px;
    text-align: left;
    font-weight: bold;
`;
export const CovidHeader = styled.h1`
    font-size: 20px;
    color: #E74C3C;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const CovidDataTitle = styled.div`
    font-size: 15px;
    color: #000;
    margin-top: 5px;
    text-align: left;
    font-weight: bold;
`;
export const CovidData = styled.div`
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
    margin-top: 5px;
    text-align: right;
    font-weight: bold;
`;
export const CovidLeft = styled.div`
    width: 50%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: right;
`;
export const CovidRight = styled.div`
    width: 50%;
    height: 50px;
`;
export const CovidContent = styled.div`
    width: 50%;
    height: 80px;
    display: flex;
    /* background: #333; */
`;