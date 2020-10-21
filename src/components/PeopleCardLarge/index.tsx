import React from 'react';

import { LeftCard, RightCard, DataSide, PhotoSide, PhotoSideCaio, DataSideTop, DataSideBottom, DataSideTopLeft, DataSideTopLeftReverse, DataSideTopRight, DataSideTopRightReverse, DataTitle, DataDescription, DataText, BtnSocialMedia, Github, Instagram, Linkedin, Reddit, Youtube, DataSideTopReverse, PhotoSideElias } from './styles';

import './styles.css';

const PeopleCardLarge: React.FC = () => {
  return (
      <>
        <LeftCard>
            <PhotoSide />
            <DataSide>
                <DataSideTop>
                    <DataSideTopLeft>
                        <DataTitle>Pablo Lopes</DataTitle>
                        <DataDescription>Desenvolvimento Web | Desenvolvimento da aplicação</DataDescription>
                    </DataSideTopLeft>
                    <DataSideTopRight>
                        <BtnSocialMedia href="https://www.linkedin.com/in/pablo-lopes-35b250191/" target="_blank" className="BtnSocialMedia"><Linkedin className="Icon"/></BtnSocialMedia>
                        <BtnSocialMedia href="https://github.com/PabloLopes19" target="_blank"  className="BtnSocialMedia"><Github className="Icon"/></BtnSocialMedia>
                        <BtnSocialMedia href="https://www.instagram.com/pablolopes19/" target="_blank" className="BtnSocialMedia"><Instagram className="Icon"/></BtnSocialMedia>
                    </DataSideTopRight>
                </DataSideTop>
                <DataSideBottom>
                    <DataText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</DataText>
                </DataSideBottom>
            </DataSide>
        </LeftCard>
        <RightCard>
            <PhotoSideCaio />
            <DataSide>
                <DataSideTopReverse>
                    <DataSideTopLeftReverse>
                        <DataTitle>Caio Bornatto</DataTitle>
                        <DataDescription>Desenvolvedor NodeJS</DataDescription>
                    </DataSideTopLeftReverse>
                    <DataSideTopRightReverse>
                        <BtnSocialMedia href="https://www.linkedin.com/in/caio-vinícius-bornatto-0b946b16a" target="_blank" className="BtnSocialMedia"><Linkedin className="Icon"/></BtnSocialMedia>
                        <BtnSocialMedia href="https://github.com/CaioBornatto" target="_blank"  className="BtnSocialMedia"><Github className="Icon"/></BtnSocialMedia>
                        <BtnSocialMedia href="https://www.reddit.com/u/Dynamo56?utm_medium=android_app&utm_source=sharehttps://www.instagram.com/pablolopes19/" target="_blank" className="BtnSocialMedia"><Reddit className="Icon"/></BtnSocialMedia>
                    </DataSideTopRightReverse>
                </DataSideTopReverse>
                <DataSideBottom>
                    <DataText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</DataText>
                </DataSideBottom>
            </DataSide>
        </RightCard>
        <LeftCard>
            <PhotoSideElias />
            <DataSide>
                <DataSideTop>
                    <DataSideTopLeft>
                        <DataTitle>Elias Kersten</DataTitle>
                        <DataDescription>UI/UX Designer | Youtuber</DataDescription>
                    </DataSideTopLeft>
                    <DataSideTopRight>
                        <BtnSocialMedia href="https://www.youtube.com/channel/UClSzLCvmkSRnFk-Rh0pX4Ig" target="_blank" className="BtnSocialMedia"><Youtube className="Icon"/></BtnSocialMedia>
                        <BtnSocialMedia href="https://github.com/PabloLopes19" target="_blank"  className="BtnSocialMedia"><Github className="Icon"/></BtnSocialMedia>
                        <BtnSocialMedia href="https://www.instagram.com/pablolopes19/" target="_blank" className="BtnSocialMedia"><Instagram className="Icon"/></BtnSocialMedia>
                    </DataSideTopRight>
                </DataSideTop>
                <DataSideBottom>
                    <DataText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</DataText>
                </DataSideBottom>
            </DataSide>
        </LeftCard>
      </>
  );
}

export default PeopleCardLarge;