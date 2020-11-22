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
    /* color: var(--textTitle); */
    border-right: 1px solid var(--logo);
    padding-right: 10px;
    font-family: 'Ubuntu';
    font-size: 20px;
    cursor: default;
`;
export const WheaterAppTitleBold = styled.strong`
    color: #3498D8;
    font-family: 'Ubuntu';
    font-size: 20px;
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

export const SideBarMenu = styled.div`
    height: 100%; width: 70%;
    display: flex;
    flex-direction: column;
    background: var(--background);
    color: var(--textDescription);
    /* padding: 5px 20px; */
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    box-shadow: 0 0 70px rgba(0, 0, 0, 0.1);
    animation-name: Menu;
    animation-duration: 0.3s;
`;