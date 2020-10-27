import React, { useEffect } from 'react';

import { Container, Content, Page1, Page2, Page4, BackToTop, Page1Title, Page1Description, Page2Description, Page1Arrow, Page1ArrowWhite, BottomArrow, Page1ArrowText, Page1ArrowWhiteText, WhiteSide, ColoredSide, SideMid, SideTop, SideBottom, BackArrow, GoBack, Page3, AnimatedTextLeft, AnimatedTextRight } from './styles';
import './styles.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

// Componentes

import Footer from '../../components/Footer';

// Imagens

import DoctorVector from '../../assets/Vectors/undraw_medical_research_qg4.png';
import WFH1 from '../../assets/Vectors/work_from_home3.png';
import WFH2 from '../../assets/Vectors/work_from_home2.png';
import WFH3 from '../../assets/Frame 1.png';

const Cares: React.FC = () => {

    useEffect(() => {
        Aos.init({ duration: 500 });


        window.scrollTo(0, 0);
    }, []);

  return (
    <Container >
        <Content>
            <Page1 id="page1">
                <Page1Title>COVID-19</Page1Title>
                <Page1Description>Os coronavírus são uma grande família de vírus comuns em muitas espécies diferentes de animais. Diferente de outros corona vírus, a COVID-19 é extremamente contagiosa para o ser humano. Em dezembro de 2019 foi identificado em Wuhan, China. De acordo com a Organização Mundial de Saúde cerca de 80% dos infectados da COVID-19 podem não apresentar sintomas claros ou nem mesmo ter eles, e somente 20% apresenta sintomas sérios que precisam ser tratados em Hospitais.</Page1Description>
                <Page1Arrow href="#Page2" className="Page1Arrow"><Page1ArrowText className="Page1ArrowText">Próximo</Page1ArrowText><BottomArrow className="BottomArrow"/></Page1Arrow>
            </Page1>
            <Page2 id="Page2">
                <WhiteSide>
                    <SideMid>
                        <img className="DoctorVector" src={DoctorVector} alt="DoctorVector" />
                    </SideMid>
                </WhiteSide>
                <ColoredSide>
                    <SideTop>
                        <GoBack href="#page1" className="backArea"><BackArrow className="backIcon"/><p className="backText">Voltar</p></GoBack>
                    </SideTop>
                    <SideMid>
                        <h1 className="coloredTitle" >Cuidados</h1>
                        <Page2Description >O vírus que causa a COVID-19 é transmitido principalmente por meio de gotículas geradas quando uma pessoa infectada tosse ou espirra. Essas gotículas são muito pesadas para permanecerem no ar e são rapidamente depositadas em superfícies. Então uma forma de se prevenir é usar mascaras de forma correta, e higienizar as mãos com álcool em gel, manter distancia das pessoas, evitar pegar em corrimãos, paredes, objetos, ou até mesmo coçar a o rosto.</Page2Description>
                    </SideMid>
                    <SideBottom>
                        <Page1ArrowWhite href="#Page3" className="Page1ArrowWhite"><Page1ArrowWhiteText className="Page1ArrowTextWhite">Próximo</Page1ArrowWhiteText><BottomArrow className="BottomArrowWhite"/></Page1ArrowWhite>
                    </SideBottom>
                </ColoredSide>
            </Page2>
            <Page3 id="Page3">
                <ColoredSide>
                    <SideTop>
                        <AnimatedTextLeft data-aos="fade-right" data-aos-delay="700">Trabalhe...</AnimatedTextLeft>
                    </SideTop>
                    <SideMid>
                        <img className="WFH1" src={WFH1} alt="WFH1" />
                    </SideMid>
                    <SideBottom >
                        <Page1ArrowWhite href="#Page4" className="Page1ArrowWhite"><Page1ArrowWhiteText className="Page1ArrowTextWhite">Próximo</Page1ArrowWhiteText><BottomArrow className="BottomArrowWhite"/></Page1ArrowWhite>
                    </SideBottom>
                </ColoredSide>
                <WhiteSide>
                    <SideTop>
                        <GoBack href="#Page2" className="backAreaBlack"><BackArrow className="backIconBlack"/><p className="backTextBlack">Voltar</p></GoBack>
                    </SideTop>
                    <SideMid>
                        <img className="WFH2" src={WFH2} alt="WFH2" />
                        <AnimatedTextRight data-aos="fade-right" data-aos-delay="1400">...em casa!</AnimatedTextRight>
                    </SideMid>
                    <SideBottom />
                </WhiteSide>
            </Page3>
            <Page4 id="Page4">
                <SideTop>
                    <GoBack href="#Page3" className="backAreaBlack"><BackArrow className="backIconBlack"/><p className="backTextBlack">Voltar</p></GoBack>
                </SideTop>
                <SideMid>
                    <Page1Title style={{ fontSize: 80, }}>Em caso de sintomas...</Page1Title>
                    <Page1Description>Se caso apresente sintomas da doença como febre, tosse, dor de garganta, falta de ar, perda do paladar, evite sair ou ter contato físico com outras pessoas, incluindo os familiares, principalmente, idosos e doentes crônicos. Caso os sintomas fiquem intensivos, é aconselhado ir para o posto de saúde de seu bairro, onde irá ser encaminhado para um hospital em piores casos.</Page1Description>
                    <img className="WFH3" src={WFH3} alt="WFH1" />
                </SideMid>
                <SideBottom>
                    <BackToTop href="#page1">
                        Voltar ao topo
                    </BackToTop>
                </SideBottom>
            </Page4>
        </Content>
        <Footer/>
    </Container>
  );
}

export default Cares;