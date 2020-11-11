import React from 'react';

import { Component, Container, ContainerTop, ContainerBottom, PetriPhoto, TalitaPhoto, MagnoPhoto, ContainerTopRight, ContainerRightTop, ContainerRightMid, ContainerRightBottom, Name, ClassLine, Class, ClassName, SocialMediaButtons, Instagram, CardText, Linkedin, Github } from './styles';

import './styles.css';

const PeopleCardSquare: React.FC = () => {
  return (
        <Component>
            <Container>
                <ContainerTop>
                    <PetriPhoto />
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
                            <SocialMediaButtons className="BtnSocialMedia" href="#" ><Github className="Icon"/></SocialMediaButtons>
                            <SocialMediaButtons className="BtnSocialMedia" href="#" ><Instagram className="Icon"/></SocialMediaButtons>
                        </ContainerRightBottom>
                    </ContainerTopRight>
                </ContainerTop>
                <ContainerBottom>
                    <CardText style={{ fontSize: 13 }}>Graduado como Bacharel em Sistemas da Informação com Ênfase em Redes de Computadores, pela Sociedade Educacional de Santa Catarina - UNISOCIESC (2004). Pós-Graduado em Gerenciamento de Projetos, pela Fundação Getúlio Vargas - FGV (2010). Mestre em Computação Aplicada, pela Universidade do Estado de Santa Catarina - UDESC (2019). Professor de graduação/técnico titular da UNISOCIESC (Ânima) e professor de graduação titular da Faculdade Anhanguera de Joinville (Kroton).</CardText>
                </ContainerBottom>
            </Container>



            <Container>
                <ContainerTop>
                    <TalitaPhoto />
                    <ContainerTopRight>
                        <ContainerRightTop><Name>Talita Schmitt</Name></ContainerRightTop>
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
                            <SocialMediaButtons className="BtnSocialMedia" href="#" ><Linkedin className="Icon"/></SocialMediaButtons>
                            <SocialMediaButtons className="BtnSocialMedia" href="#" ><Github className="Icon"/></SocialMediaButtons>
                            <SocialMediaButtons className="BtnSocialMedia" href="#" ><Instagram className="Icon"/></SocialMediaButtons>
                        </ContainerRightBottom>
                    </ContainerTopRight>
                </ContainerTop>
                <ContainerBottom>
                    <CardText style={{ fontSize: 17 }}>Professora da Escola Técnica Tupy há 11 anos e empresária do ramo de Gestão de Documentos. Já atuou como Gerente de Projetos de Redes de Computadores. É Mestre em Engenharia Mecânica, MBA em Gestão de Projetos, Bacharel em Sistemas de Informação e Técnica em Telecomunicações.</CardText>
                </ContainerBottom>
            </Container>



            <Container>
                <ContainerTop>
                    <MagnoPhoto />
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
                            <SocialMediaButtons className="BtnSocialMedia" href="#" ><Linkedin className="Icon"/></SocialMediaButtons>
                            <SocialMediaButtons className="BtnSocialMedia" href="#" ><Github className="Icon"/></SocialMediaButtons>
                            <SocialMediaButtons className="BtnSocialMedia" href="#" ><Instagram className="Icon"/></SocialMediaButtons>
                        </ContainerRightBottom>
                    </ContainerTopRight>
                </ContainerTop>
                <ContainerBottom>
                    <CardText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur ex sequi consectetur earum. Veritatis officia minus quos, iusto necessitatibus animi rerum delectus voluptas beatae earum hic nostrum, illo cum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est accusamus obcaecati animi corrupti perferendis doloremque provident eveniet</CardText>
                </ContainerBottom>
            </Container>
        </Component>
    );
}

export default PeopleCardSquare;