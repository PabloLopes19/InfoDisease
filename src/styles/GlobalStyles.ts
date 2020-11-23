import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        ${(props) => {
            const theme = props.theme;

            let append = '';
            Object.entries(theme).forEach(([prop, value]) => {
                append += `--${prop}: ${value};`;
            })

            return append;
        }}
    }
    @media(min-width: 1200px){
        .sideMenu{
            left: -100%;
        }
    }
    @media(max-width: 1200px){
        #DataText{
            font-size: 10px;
        }
    }

    @media(max-width: 1098px){
        #DesktopHeaderMenu  {
            display: none;
        }
        #Logo{
            border: none;
            width: 100%;
            text-align: center;
            /* transform: translateX(-10px); */
        }
        .burger{
            display: flex;
        }
        #left{
            width: 100%;
            display: flex;
            justify-content: center;
        }
        #DekstopHeader{
            justify-content: center; 
        }
        #Cards, #HorizontalDiv{
            display: none;
        }
        #Swiper{
            display: flex;
        }
        #LinkData{
            width: 240px; height: 240px;
        }
        #LinkDataIcon{
            width: 100px; height: 100px;
        }
        .cardsArea, .CardsArea{
            grid-template-columns: repeat(2, 0fr);
        }
        #LeftCard{
            height: 120px; min-width: 60%;
            box-shadow: 9px 9px 0px var(--shadow);
        }
        #photoSide{
            display: none;
        }
        #DataTitle{
            font-size: 25px;
            width: 100%;
            /* background: #333; */
            text-align: center;
        }
        #DataDescritpion{
            font-size: 10px;
            text-align: center;
        }
        #SideTop{
            height: 50%;
            width: 200%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            /* background: #000;             */
        }
        #SideBottom{
            display: none;
        }
        #DataSide{            
            /* background: #ddd; */
            padding: 0;
            height: 100%;
            width: 50%;
        }
        #SideLeft{
            width: 100%; height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* background: green; */
        }
        #SocialMedias{
            align-items: center;
            width: 100%; height: 100%;
            transform: translateY(35px);
            justify-content: center;
            /* background: #000; */
        }
        #SocialMediasProf{
            align-items: center;
            width: 100%; height: 100%;
            transform: translateY(25px);
            justify-content: center;
            /* background: #000; */
        }
        #btnSocialMedia{
            height: 45px; width: 45px;
        }
        #DataText{
            display: none;
        }
        #RightCard{
            height: 120px; min-width: 60%;
            box-shadow: 9px 9px 0px var(--shadow);
            flex-direction: row;
        }
        #TopSide{
            flex-direction: column;
            justify-content: center;
        }
        #RightTop{
            background: #ddd;
            width: 170%;
            text-align: center;
        }
        #ProfData{
            /* background: #ddd; */
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-top: 20px;
            margin-bottom: -20px;
        }
        #ProfText{
            text-align: center;
            justify-content: center;
            align-items: center;
            /* background: #000; */
        }
        #SwiperProf{
            display: flex;
            justify-content: center;
            width: 540px; height: 250px;
            border-radius: 6px;
            margin: 50px 0;
            /* display: none; */
        }
        #Slider{
            transform: translateX(-30px);
        }
        .mobile{
            display: initial;
        }
        #BackToTop{
            margin-top: 150px;
        }
    }
    @media(max-width: 721px){
        #Title{
            font-size: 60px;
        }
        #Descritpion{
            font-size: 12px;
            line-height: 16px;
        }
        #Descritpion2{
            font-size: 14px;
            width: 80%;
            text-align: justify;
        }
        #FullColoredSize{
            width: 100%;
            background: var(--coloredBackground);
        }
        #FullColoredSize2{
            width: 100%;
            background: var(--coloredBackground);
            flex-direction: row;
            border-top: 2px solid var(--cardBackground);
        }
        #NoWhiteSide{
            display: none;
        }
        #WhiteColored{
            background: var(--coloredBackground);
            display: flex; 
            align-items: center;
        }
        #AnimatedText{
            color: #fff;
            font-size: 65px;
            width: 100%;
            margin-bottom: 0;
            /* background: #333; */
        }
        #AnimatedText2{
            color: #fff;
            font-size: 35px;
            display: flex;
            margin-bottom: 0;
            width: 100%;
            transform: translateY(-50px);
            /* background: #333; */
        }
        #vector{
            display: none;
        }
        .cardsArea, .CardsArea{
            grid-template-columns: repeat(1, 0fr);
        }
        .SearchArea input{
            width: 80%;
        }
        #DataText{
            font-size: 10px;
        }
        #BackToTop{
            font-size: 13px;
            margin-top: 250px;
            border-radius: 35px;
            width: 200px;
            transform: translateY(-100px);
        }
        .techButtons{
            margin: -50px 0;
        }
        .btnTech{
            width: 150px; height: 150px;
            margin: 0 10px;
        }
        .techIcon{
            width: 100px; height: 100px;
        }
        #RepButton{
            font-size: 12px;
            width: 80%;
        }
        .repName{
            border-right: none;
            /* background: #333; */
            width: 100%;
            margin-bottom: 20px;
        }
        #topLeft{
            /* background: #ddd; */
            width: 100%; height: 30%;
            text-align: center;
            align-items: center; justify-content: center;
            border: none;
        }
        #ContainerTop{
            flex-direction: column;
            justify-content: center;
            height: 100%;
            /* background: #ccc; */
        }
        #devs{
            display: flex;
            justify-content: center;
        }
        .text{
            transform: translateX(-25px);
        }
        #ApiCard{
            flex-direction: column;
            height: 100px;
            padding-top: 20px;
        }
    }
    @media(max-width: 466px){
        #Title{
            font-size: 40px;
        }
        #Descritpion{
            font-size: 10px;
        }
    }
    @media(max-width: 310px){
        #Title{
            font-size: 20px;
        }
    }
`;