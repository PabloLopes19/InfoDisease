import styled from 'styled-components';

import { AiFillGithub, AiFillInfoCircle, AiOutlineShareAlt } from 'react-icons/ai';
import { RiVirusLine } from 'react-icons/ri';

export const Container = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #3498DB;
  margin-top: 150px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
`;
export const Button = styled.a`
    width: 70px; height: 70px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3498DB;
    margin: 0 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
        background: #ddd;
    }
`;
export const Info = styled(AiFillInfoCircle)`
    height: 40px; width: 40px;
`;
export const Github = styled(AiFillGithub)`
    height: 40px; width: 40px;
`;
export const Virus = styled(RiVirusLine)`
    height: 40px; width: 40px;
`;
export const Share = styled(AiOutlineShareAlt)`
    height: 40px; width: 40px;
`;
export const Copyright = styled.p`
    color: #fff;
    margin-top: 250px;
    position: absolute;
    font-size: 15px;
    font-weight: bold
`;