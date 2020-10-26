import React from 'react';

import { Component, Container, ContainerTop, ContainerBottom, ContainerTopLeft, ContainerTopRight, ContainerRightTop, ContainerRightMid, ContainerRightBottom, Name, ClassLine, Class, ClassName, SocialMediaButtons, Instagram, CardText, Linkedin, Github } from './styles';

import './styles.css';

const PeopleCardSquare: React.FC = () => {
  return (
        <Component>
            <Container>
                <ContainerTop>
                    <ContainerTopLeft>
                        <p className="photoText">Photo</p>
                    </ContainerTopLeft>
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



            <Container>
                <ContainerTop>
                    <ContainerTopLeft>
                        <p className="photoText">Photo</p>
                    </ContainerTopLeft>
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
                    <CardText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur ex sequi consectetur earum. Veritatis officia minus quos, iusto necessitatibus animi rerum delectus voluptas beatae earum hic nostrum, illo cum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est accusamus obcaecati animi corrupti perferendis doloremque provident eveniet</CardText>
                </ContainerBottom>
            </Container>



            <Container>
                <ContainerTop>
                    <ContainerTopLeft>
                        <p className="photoText">Photo</p>
                    </ContainerTopLeft>
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