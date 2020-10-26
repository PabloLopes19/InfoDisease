import styled from 'styled-components';

import ProfilePic from '../../assets/MyUserImg.jpg';

import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin, AiFillRedditCircle } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

export const Component = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
`;
export const Container = styled.div`
    width: 350px;
    height: 400px;
    /* background: #FFFFFF; */
    box-shadow: 15px 15px 0px var(--shadow);
    border-radius: 6px;
    margin: 0 30px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    background: var(--areaBackground);
`;

export const ContainerTop = styled.div`
    /* background: yellow; */
    width: 90%;
    height: 50%;
    display: flex;
    padding: 0 10px 0 10px;
    align-items: top;
`;
export const ContainerBottom = styled.div`
    /* background: blue; */
    width: 90%;
    height: 50%;
    display: flex;
    justify-content: center;
`;
export const ContainerTopLeft = styled.div`
    /* background: url(${ProfilePic});
    background-size: cover;
    background-repeat: no-repeat; */
    background: var(--photo);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 72%;
    /* width: 180px;
    height: 180px; */
    border-radius: 6px;
`;
export const ContainerTopRight = styled.div`
    /* background: #ddd; */
    width: 60%;
    height: 90%;
`;
export const ContainerRightTop = styled.div`
    /* background: #333; */
    height: 20%;
    width: 100%;
    padding: 0 10px 0 10px;
`;
export const ContainerRightMid = styled.div`
    /* background: grey; */
    height: 30%;
    width: 100%;
    padding: 0 10px 0 10px;
`;
export const ContainerRightBottom = styled.div`
    /* background: orange; */
    height: 50%;
    width: 100%;
    padding: 0 10px 0 0;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: right;
`;
export const Name = styled.h1`
    font-size: 23px;
    color: var(--textTitle);
`;
export const ClassLine = styled.div`
    width: 100%;
    display: flex;
    align-items: end;
`;
export const Class = styled.p`
    font-size: 14px;
    color: var(--textDescription);
    font-weight: bold;
`;
export const ClassName = styled.p`
    font-size: 14px;
    color: var(--textDescription);
    font-weight: bold;
    margin-left: 5px;
`;
export const  SocialMediaButtons = styled.a`
    color: #fff;
    background: var(--socialMediaButtons);
    border-radius: 4px;
    margin: 0 0 0 10px;
    width: 48px; height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const CardText = styled.p`
    width: 90%;
    height: 100%;
    text-align: justify;
    color: var(--textDescription);
    font-size: 14px;
`;


// Icons

export const Instagram = styled(AiOutlineInstagram)`
    height: 30px; width: 30px;
`;
export const Github = styled(AiFillGithub)`
    height: 30px; width: 30px;
`;
export const Discord = styled(FaDiscord)`
    height: 25px; width: 25px;
`;
export const Linkedin = styled(AiFillLinkedin)`
    height: 25px; width: 25px;
`;
export const Reddit = styled(AiFillRedditCircle)`
    height: 25px; width: 25px;
`;