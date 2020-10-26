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
    background: var(--cardBackground);
    padding: 5px 16px;
    height: 60px;
    border-bottom: 2px solid var(--borders);
    justify-content: space-between;
`;

export const WeatherAppLogo = styled(WiDayCloudy)`
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    fill: var(--logo);
`;

export const WeatherAppTitle = styled.h1`
    color: #3498DB;
    border-right: 1px solid var(--logo);
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
    color: var(--textTitle);
    font-weight: bold;
    text-decoration: none;
    margin-right: 10px;
    padding: 5px 10px; 
    border-radius: 15px;
    transition: all 0.2s;

    &:hover{
        opacity: 0.3;
    }
`;
export const DarkModeButton = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
`;
export const DarkModeIcon = styled(FaRegLightbulb)`
    fill: var(--textTitle);
    height: 23px;
    width: 23px;
    transition: all 0.3s;
    cursor: pointer;
    
    &:hover{
        opacity: 0.7;
    }
`;