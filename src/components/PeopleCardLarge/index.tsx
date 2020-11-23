import React from 'react';
import { Facebook } from '../PeopleCardSquare/styles';

import { LeftCard, RightCard, DataSide, PhotoSide, PhotoSideCaio, DataSideTop, DataSideBottom, DataSideTopLeft, DataSideTopLeftReverse, DataSideTopRight, DataSideTopRightReverse, DataTitle, DataDescription, DataText, BtnSocialMedia, Github, Instagram, Linkedin, Reddit, Youtube, DataSideTopReverse, PhotoSideElias } from './styles';

import './styles.css';

const PeopleCardLarge: React.FC = () => {
  return (
      <>
        <LeftCard id="LeftCard">
            <PhotoSide id="photoSide"/>
            <DataSide id="DataSide">
                <DataSideTop id="SideTop">
                    <DataSideTopLeft id="SideLeft">
                        <DataTitle id="DataTitle">Pablo Lopes</DataTitle>
                        <DataDescription id="DataDescritpion">Desenvolvimento Web | Desenvolvimento da aplicação</DataDescription>
                    </DataSideTopLeft>
                    <DataSideTopRight id="SocialMedias">
                        <BtnSocialMedia id="btnSocialMedia" href="https://www.linkedin.com/in/pablo-lopes-35b250191/" target="_blank" className="BtnSocialMedia"><Linkedin className="Icon"/></BtnSocialMedia>
                        <BtnSocialMedia id="btnSocialMedia" href="https://github.com/PabloLopes19" target="_blank"  className="BtnSocialMedia"><Github className="Icon"/></BtnSocialMedia>
                        <BtnSocialMedia id="btnSocialMedia" href="https://www.instagram.com/pablolopes19/" target="_blank" className="BtnSocialMedia"><Instagram className="Icon"/></BtnSocialMedia>
                    </DataSideTopRight>
                </DataSideTop>
                <DataSideBottom id="SideBottom">
                    <DataText id="DataText">Desenvolvedor Web e Mobile. Líder do projeto InfoDisease e além de outros projetos pessoais e comerciais. Conhecimento em tecnologias Web como HTML, CSS3, JavaScript e bibliotecas como ReactJs, assim como a sua versão para desenvolvimento Mobile, com React Native. Atualmente cursando o segundo ano do ensino médio na EEB Prof. Germano Timm e terminando o primeiro ano em técnico de informática da ETT. Fã de tecnologia, programação e F1, apaixonado por desafios e novos projetos.</DataText>
                </DataSideBottom>
            </DataSide>
        </LeftCard>
        <RightCard id="RightCard">
            <PhotoSideCaio id="photoSide"/>
            <DataSide id="DataSide">
                <DataSideTopReverse id="SideTop">
                    <DataSideTopLeftReverse id="SideLeft">
                        <DataTitle id="DataTitle">Caio Bornatto</DataTitle>
                        <DataDescription id="DataDescritpion">Desenvolvedor NodeJS</DataDescription>
                    </DataSideTopLeftReverse>
                    <DataSideTopRightReverse id="SocialMedias">
                        <BtnSocialMedia id="btnSocialMedia" href="https://www.linkedin.com/in/caio-vinícius-bornatto-0b946b16a" target="_blank" className="BtnSocialMedia"><Linkedin className="Icon"/></BtnSocialMedia>
                        <BtnSocialMedia id="btnSocialMedia" href="https://github.com/CaioBornatto" target="_blank"  className="BtnSocialMedia"><Github className="Icon"/></BtnSocialMedia>
                        <BtnSocialMedia id="btnSocialMedia" href="https://www.reddit.com/u/Dynamo56?utm_medium=android_app&utm_source=sharehttps://www.instagram.com/pablolopes19/" target="_blank" className="BtnSocialMedia"><Reddit className="Icon"/></BtnSocialMedia>
                    </DataSideTopRightReverse>
                </DataSideTopReverse>
                <DataSideBottom>
                    <DataText id="DataText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</DataText>
                </DataSideBottom>
            </DataSide>
        </RightCard>
        <LeftCard id="LeftCard">
            <PhotoSideElias id="photoSide"/>
            <DataSide id="DataSide">
                <DataSideTop id="SideTop">
                    <DataSideTopLeft id="SideLeft">
                        <DataTitle id="DataTitle">Elias Kersten</DataTitle>
                        <DataDescription id="DataDescritpion">UI/UX Designer | Youtuber</DataDescription>
                    </DataSideTopLeft>
                    <DataSideTopRight id="SocialMedias">
                        <BtnSocialMedia id="btnSocialMedia" href="https://www.youtube.com/channel/UClSzLCvmkSRnFk-Rh0pX4Ig" target="_blank" className="BtnSocialMedia"><Youtube className="Icon"/></BtnSocialMedia>
                        <BtnSocialMedia id="btnSocialMedia" href="https://www.facebook.com/KiwidaSilva/" target="_blank"  className="BtnSocialMedia"><Facebook className="Icon"/></BtnSocialMedia>
                        <BtnSocialMedia id="btnSocialMedia" href="https://www.instagram.com/elitale/" target="_blank" className="BtnSocialMedia"><Instagram className="Icon"/></BtnSocialMedia>
                    </DataSideTopRight>
                </DataSideTop>
                <DataSideBottom>
                    <DataText id="DataText">Estudante do curso técnico de Informática da ETT, cursando 2º ano do ensino médio. Youtuber gamer com computador manco.</DataText>
                </DataSideBottom>
            </DataSide>
        </LeftCard>
      </>
  );
}

export default PeopleCardLarge;