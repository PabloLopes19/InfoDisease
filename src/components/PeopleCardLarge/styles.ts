import styled from 'styled-components';

import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin, AiFillRedditCircle } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

import PabloUserImg from '../../assets/MyUserImg.jpg';
import CaioUserImg from '../../assets/CaioProfilePic.jpeg';

export const LeftCard = styled.div`
  width: 80%;
  height: 218px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 18px 18px 0px #3498DB;
  margin-top: 50px;
  display: flex;
  align-items: center;
`;
export const RightCard = styled.div`
  width: 80%;
  height: 218px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 18px 18px 0px #3498DB;
  margin-top: 50px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;
export const PhotoSide = styled.div`
    width: 191px;
    height: 191px;
    border-radius: 16px;
    /* background: black; */
    background-image: url(${PabloUserImg});
    background-size: contain;
    margin-left: 30px;
    margin-right: 30px;
`;
export const PhotoSideCaio = styled.div`
    width: 191px;
    height: 191px;
    border-radius: 16px;
    /* background: black; */
    background-image: url(${CaioUserImg});
    background-size: cover;
    margin-left: 30px;
    margin-right: 30px;
`;
export const DataSide = styled.div`
    width: 75%;
    height: 191px;
    /* background: yellow; */
`;
export const DataSideTop = styled.div`
    /* background: red; */
    height: 50%;
    width: 100%;
    display: flex;
    padding-top: 15px;
`;
export const DataSideTopReverse = styled.div`
    /* background: red; */
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    padding-top: 15px;
`;
export const DataSideBottom = styled.div`
    /* background: green; */
    width: 100%;
    height: 60%;
`;
export const DataSideTopLeft = styled.div`
    height: 100%;
    width: 70%;
    /* background: orange; */
`;
export const DataSideTopRight = styled.div`
    height: 100%;
    width: 30%;
    /* background: #333; */
    display: flex;
    align-items: top;
    justify-content: center;
`;
export const DataSideTopLeftReverse = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    text-align: right;
    /* background: orange; */
`;
export const DataSideTopRightReverse = styled.div`
    height: 100%;
    width: 30%;
    /* background: #333; */
    display: flex;
    align-items: top;
    justify-content: start;

`;
export const DataTitle = styled.h1`
    font-size: 30px;
    color: #000;
`;
export const DataDescription = styled.p`
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
`;
export const DataText = styled.p`
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
    width: 100%;
    height: 100%;
    line-height: 18px;
`;
export const BtnSocialMedia = styled.a`
    color: #fff;
    background: #3498DB;
    border-radius: 4px;
    margin: 0 10px 0 10px;
    width: 48px; height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

// Icons

export const Github = styled(AiFillGithub)`
    height: 30px; width: 30px;
`;
export const Instagram = styled(AiOutlineInstagram)`
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