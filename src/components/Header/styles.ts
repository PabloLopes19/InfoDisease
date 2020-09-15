import styled from 'styled-components';

import { WiDayCloudy } from 'react-icons/wi';
import { FaRegLightbulb } from 'react-icons/fa';

export const Left = styled.div`
    display: flex; 
    align-items: center;
`;
export const Right = styled.div``;

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: #fff;
    padding: 5px 16px;
    justify-content: space-between;
`;

export const WeatherAppLogo = styled(WiDayCloudy)`
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    fill: #3498DB;
`;

export const WeatherAppTitle = styled.h1`
    color: #3498DB;
    border-right: 1px solid #3498DB;
    padding-right: 10px;
    cursor: default;
`;
export const Menu = styled.div`
    display: flex;
    align-items: center;
    padding: 0 5px;
    margin-left: 10px;
`;
export const Buttons = styled.a`
    color: #272727;
    font-weight: bold;
    text-decoration: none;
    margin-right: 10px;
    padding: 5px 10px; 
    border-radius: 15px;
    transition: background 0.3s;

    &:hover{
        /* color: rgba(39, 39, 39, 0.3); */
        color: #fff;
        background: #3498DB;
    }
`;
export const DarkModeButton = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
`;
export const DarkModeIcon = styled(FaRegLightbulb)`
    fill: #272727;
    height: 23px;
    width: 23px;
    transition: all 0.3s;
    cursor: pointer;
    
    &:hover{
        fill: rgba(39, 39, 39, 0.3);
    }
`;