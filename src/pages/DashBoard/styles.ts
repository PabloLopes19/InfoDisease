import styled from 'styled-components';

import { FaGlobeAmericas } from 'react-icons/fa';
import { GiBrazilFlag } from 'react-icons/gi';

export const Page = styled.div`
  scroll-behavior: none;
  animation: none;

  .Swiper{
    /* background: #000; */
    display: flex;
    justify-content: center;
    width: 340px; height: 300px;
    border-radius: 6px;
    margin: 50px 0 0 0;
    display: none;
  }
  .SwiperPages{
    display: flex;
    justify-content: center;
    width: 340px;
    border-radius: 6px;
    margin: 50px 0;
    display: none;
  }
  #teste{
    width: 300px; height: 300px;
    background: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding-top: 120px;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 80px;
  color: var(--textTitle);
`;
export const TitleMedium = styled.h1`
  font-size: 40px;
  margin-top: 50px;
  color: var(--textTitle);
`;
export const Description = styled.p`
  color: var(--textDescription);
  margin-top: 10px;
  width: 55%;
  text-align: center;
  line-height: 32px;
  font-weight: bold;
`;

export const CardsArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--areaBackground);
  border-top: 1px solid var(--borders);
  border-bottom: 1px solid var(--borders);
  width: 100%;
  height: 550px;
  margin-top: 150px;
  margin-bottom: 150px;
  box-shadow: 0px 4px 39px 3px rgba(0, 0, 0, 0.09); 
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 90%;
  align-items: center;
  margin: 40px 0 40px 0;
`;

export const LinkArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const LinkText = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: var(--logo);
  font-size: 15px;
  text-align: center;
  margin-top: 20px;
  height: 50%;
  display: flex;
  align-items: center;
  /* background: #ddd; */
  transition: all 0.2s;

  &:hover{
    color: #ddd;
  }
`;

export const CardContainer = styled.div`
    width: 300px;
    height: 350px;
    background: var(--areaBackground);
    box-shadow: 0px 0px 17px 1px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    cursor: pointer;
    border: 3px solid transparent;
    transition: all 0.2s;


    &:hover{
        border: 3px solid #3498DB;
    }
`;

export const HorizontalDiv = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const GlobeIcon = styled(FaGlobeAmericas)`
  fill: var(--logo);
  width: 150px; height: 150px;
`;
export const CardContainerText = styled.h1`
  font-size: 25px;
  color: var(--textDescription);
  margin-top: 10px;
  text-decoration: none;
`;
export const BrazilIcon = styled(GiBrazilFlag)`
  fill: var(--logo);
  width: 150px; height: 150px;
  border-radius: 50%;
  border: 5px solid var(--logo);
`;