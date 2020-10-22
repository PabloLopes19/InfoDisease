import styled from 'styled-components';

// Ícones
import { IoIosArrowDown, IoIosArrowBack } from 'react-icons/io';

// Areas

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
`;
export const Page1 = styled.div`
    width: 100%; height: 100vh;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    scroll-behavior: smooth;
`;
export const Page2 = styled.div`
    width: 100%; height: 100vh;
    /* background: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    scroll-behavior: smooth;
`;
export const Page3 = styled.div`
    width: 100%; height: 100vh;
    /* background: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
export const Page4 = styled.div`
    width: 100%; height: 100vh;
    /* background: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ColoredSide = styled.div`
    width: 50%; height: 100%;
    background: #3498DB;
    display: flex;
    flex-direction: column;
`;
export const WhiteSide = styled.div`
    width: 50%; height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SideTop = styled.div`
    width: 100%; height: 10%;
    /* background: yellow; */
    display: flex;
    align-items: center;
`;
export const SideMid = styled.div`
    width: 100%; height: 80%;
    /* background: green; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const SideBottom = styled.div`
    width: 100%; height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: red; */
    padding: 0 30px 0 20px;
`;

// Componentes

export const Page1Title = styled.h1`
    font-size: 100px;
    color: #000;
    text-align: center;
`;
export const Page1Description = styled.p`
    font-weight: normal;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
    width: 60%;
`;
export const Page2Description = styled.p`
    font-weight: normal;
    font-size: 25px;
    line-height: 29px;
    text-align: justify;
    width: 80%;
    color: #fff;
    margin-top: 20px;
`;
export const Page1Arrow = styled.a`
    color: #3498DB;
    font-size: 20px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    cursor: pointer;
    /* background: #ddd; */
    border-radius: 50%;
    flex-direction: column;
`;
export const Page1ArrowText = styled.p`
    /* color: #3498DB; */
    color: transparent;
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    position: absolute;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;
export const Page1ArrowWhite = styled.a`
    color: #fff;
    font-size: 20px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 30px; */
    cursor: pointer;
    /* background: #ddd; */
    border-radius: 50%;
    flex-direction: column;
`;
export const Page1ArrowWhiteText = styled.p`
    /* color: #fff; */
    color: transparent;
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    position: absolute;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;
export const GoBack = styled.a`
    /* background: #ccc; */
    padding: 10px;
    width: 13%; height: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
`;

export const AnimatedTextLeft = styled.h1`
    text-align: center;
    display: flex;
    justify-content: center;
    color: #fff;
    width: 100%;
    font-size: 60px;
    margin-top: 130px;
`;
export const AnimatedTextRight = styled.h1`
    text-align: center;
    display: flex;
    justify-content: center;
    color: #000;
    width: 100%;
    font-size: 60px;
    margin-top: -60px;
`;

export const BottomArrow = styled(IoIosArrowDown)`
    width: 30px; height: 30px;
`;

export const BackArrow = styled(IoIosArrowBack)`
    width: 20px; height: 20px;
    color: transparent;
`;

export const BackToTop = styled.a`
    width: 20%;
    background: #3498DB;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    transform: translateY(50px);
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
`;

// Vetores
