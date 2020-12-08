import React from 'react';

import { Component, Container, ContainerTop, ContainerBottom, PetriPhoto, TalitaPhoto, MagnoPhoto, ContainerTopRight, ContainerRightTop, ContainerRightMid, ContainerRightBottom, Name, ClassLine, Class, ClassName, SocialMediaButtons, Instagram, CardText, Linkedin, Github, Facebook, MobileContainer } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

import './styles.css';

const PeopleCardSquare: React.FC = () => {

    SwiperCore.use([ Navigation, Pagination ]);

  return (
        <Component>
            <Container id="photoSide" >
                <ContainerTop>
                    <PetriPhoto id="photoSide" />
                    <ContainerTopRight>
                        <ContainerRightTop><Name>Marcelo Petri</Name></ContainerRightTop>
                        <ContainerRightMid>
                            <ClassLine>
                                <Class>Matéria: </Class>
                                <ClassName>Desen. Web</ClassName>
                            </ClassLine>
                            <ClassLine>
                                <Class>Turma: </Class>
                                <ClassName>IN221</ClassName>
                            </ClassLine>
                        </ContainerRightMid>
                        <ContainerRightBottom>
                            <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.linkedin.com/in/marcelopetri/?originalSubdomain=br" ><Linkedin className="Icon"/></SocialMediaButtons>
                            <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://github.com/marcelopetri" ><Github className="Icon"/></SocialMediaButtons>
                            <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.instagram.com/petrioficial/" ><Instagram className="Icon"/></SocialMediaButtons>
                        </ContainerRightBottom>
                    </ContainerTopRight>
                </ContainerTop>
                <ContainerBottom>
                    <CardText style={{ fontSize: 13 }}>Graduado como Bacharel em Sistemas da Informação com Ênfase em Redes de Computadores, pela Sociedade Educacional de Santa Catarina - UNISOCIESC (2004). Pós-Graduado em Gerenciamento de Projetos, pela Fundação Getúlio Vargas - FGV (2010). Mestre em Computação Aplicada, pela Universidade do Estado de Santa Catarina - UDESC (2019). Professor de graduação/técnico titular da UNISOCIESC (Ânima) e professor de graduação titular da Faculdade Anhanguera de Joinville (Kroton).</CardText>
                </ContainerBottom>
            </Container>



            <Container id="photoSide">
                <ContainerTop id="TopSide">
                    <TalitaPhoto id="photoSide"/>
                    <ContainerTopRight>
                        <ContainerRightTop id="RightTop"><Name>Talita Schmitt</Name></ContainerRightTop>
                        <ContainerRightMid>
                            <ClassLine>
                                <Class>Matéria: </Class>
                                <ClassName style={{ fontSize: 11 }}>Desen. de sistemas</ClassName>
                            </ClassLine>
                            <ClassLine>
                                <Class>Turma: </Class>
                                <ClassName>IN221</ClassName>
                            </ClassLine>
                        </ContainerRightMid>
                        <ContainerRightBottom>
                            <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.linkedin.com/in/talita-caroline-oliveira-schmitt-482691138/" ><Linkedin className="Icon"/></SocialMediaButtons>
                            <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.facebook.com/talita.schmitt" ><Facebook className="Icon"/></SocialMediaButtons>
                            <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.instagram.com/talita_schmitt/" ><Instagram className="Icon"/></SocialMediaButtons>
                        </ContainerRightBottom>
                    </ContainerTopRight>
                </ContainerTop>
                <ContainerBottom>
                    <CardText id="photoSide" style={{ fontSize: 17 }}>Professora da Escola Técnica Tupy há 11 anos e empresária do ramo de Gestão de Documentos. Já atuou como Gerente de Projetos de Redes de Computadores. É Mestre em Engenharia Mecânica, MBA em Gestão de Projetos, Bacharel em Sistemas de Informação e Técnica em Telecomunicações.</CardText>
                </ContainerBottom>
            </Container>



            <Container id="photoSide">
                <ContainerTop>
                    <MagnoPhoto id="photoSide" />
                    <ContainerTopRight>
                        <ContainerRightTop><Name style={{ fontSize: 22 }}>Magno Schmitt</Name></ContainerRightTop>
                        <ContainerRightMid>
                            <ClassLine>
                                <Class>Matéria: </Class>
                                <ClassName>Arduíno</ClassName>
                            </ClassLine>
                            <ClassLine>
                                <Class>Turma: </Class>
                                <ClassName>IN221</ClassName>
                            </ClassLine>
                        </ContainerRightMid>
                        <ContainerRightBottom>
                            <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.linkedin.com/in/magno-de-souza-schmitt-429910148/" ><Linkedin className="Icon"/></SocialMediaButtons>
                            <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.facebook.com/magnodesouza.schmitt" ><Facebook className="Icon"/></SocialMediaButtons>
                            <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.instagram.com/magnoschmitt/" ><Instagram className="Icon"/></SocialMediaButtons>
                        </ContainerRightBottom>
                    </ContainerTopRight>
                </ContainerTop>
                <ContainerBottom>
                    <CardText style={{ fontSize: 17 }}>Professor da Escola Técnica Tupy há 7 anos e empresário do ramo de Gestão de Documentos. Já atuou na indústria, em laboratório de Termodinâmica, de ensaios e de Mecânica. É Mestre em Engenharia Mecânica, Tecnólogo em Mecânica e Técnico em Eletrônica.</CardText>
                </ContainerBottom>
            </Container>

            <div className="mobile">
                <Swiper
                        className="Swiper"
                        id="SwiperProf"
                        style={{ width: 280 }}
                        spaceBetween={100}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        pagination={{ dynamicBullets: true, clickable: true}}
                        >
                        <SwiperSlide id="Slider">
                            <MobileContainer>
                                <ContainerRightTop><Name style={{ fontSize: 22, textAlign: 'center' }}>Talita Schmitt</Name></ContainerRightTop>
                                <ContainerRightMid id="ProfData">
                                        <ClassLine id="ProfText">
                                            <Class>Matéria: </Class>
                                            <ClassName style={{ fontSize: 11 }}>Desen. de sistemas</ClassName>
                                        </ClassLine>
                                        <ClassLine id="ProfText">
                                            <Class>Turma: </Class>
                                            <ClassName>IN221</ClassName>
                                        </ClassLine>
                                    </ContainerRightMid>
                                <ContainerRightBottom id="SocialMediasProf">
                                    <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.linkedin.com/in/talita-caroline-oliveira-schmitt-482691138/" ><Linkedin className="Icon"/></SocialMediaButtons>
                                    <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.facebook.com/talita.schmitt" ><Facebook className="Icon"/></SocialMediaButtons>
                                    <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.instagram.com/talita_schmitt/" ><Instagram className="Icon"/></SocialMediaButtons>
                                </ContainerRightBottom>
                            </MobileContainer>
                        </SwiperSlide>
                        <SwiperSlide id="Slider">
                            <MobileContainer>
                                <ContainerRightTop><Name style={{ fontSize: 22, textAlign: 'center' }}>Magno Schmitt</Name></ContainerRightTop>
                                <ContainerRightMid id="ProfData">
                                        <ClassLine id="ProfText">
                                            <Class>Matéria: </Class>
                                            <ClassName>Arduíno</ClassName>
                                        </ClassLine>
                                        <ClassLine id="ProfText">
                                            <Class>Turma: </Class>
                                            <ClassName>IN221</ClassName>
                                        </ClassLine>
                                    </ContainerRightMid>
                                <ContainerRightBottom id="SocialMediasProf">
                                    <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.linkedin.com/in/magno-de-souza-schmitt-429910148/" ><Linkedin className="Icon"/></SocialMediaButtons>
                                    <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.facebook.com/magnodesouza.schmitt" ><Facebook className="Icon"/></SocialMediaButtons>
                                    <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.instagram.com/magnoschmitt/" ><Instagram className="Icon"/></SocialMediaButtons>
                                </ContainerRightBottom>
                            </MobileContainer>
                        </SwiperSlide>
                        <SwiperSlide id="Slider">
                            <MobileContainer>
                                <ContainerRightTop><Name style={{ fontSize: 22, textAlign: 'center' }}>Marcelo Petri</Name></ContainerRightTop>
                                <ContainerRightMid id="ProfData">
                                        <ClassLine id="ProfText">
                                            <Class>Matéria: </Class>
                                            <ClassName>Desen. Web</ClassName>
                                        </ClassLine>
                                        <ClassLine id="ProfText">
                                            <Class>Turma: </Class>
                                            <ClassName>IN221</ClassName>
                                        </ClassLine>
                                    </ContainerRightMid>
                                <ContainerRightBottom id="SocialMediasProf">
                                    <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.linkedin.com/in/marcelopetri/?originalSubdomain=br" ><Linkedin className="Icon"/></SocialMediaButtons>
                                    <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="#" ><Github className="Icon"/></SocialMediaButtons>
                                    <SocialMediaButtons className="BtnSocialMedia" target="_blank" href="https://www.instagram.com/petrioficial/" ><Instagram className="Icon"/></SocialMediaButtons>
                                </ContainerRightBottom>
                            </MobileContainer>
                        </SwiperSlide>
                    </Swiper>
            </div>
        </Component>
    );
}

export default PeopleCardSquare;