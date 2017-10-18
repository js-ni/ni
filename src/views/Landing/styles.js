import { injectGlobal } from 'emotion';
import styled from 'react-emotion';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background-color: #46483E !important;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const Features = styled.div`
  position: relative;
  background-image: url(http://www.beerjs.cl/assets/images/que.jpg);
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  padding: 80px 0;

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2C3E50;
    opacity: .9;
  }
`;

export const AboutTitle = styled.div`
  text-align: center;
  padding: 10px 15px;
  max-width: 600px;
  position: relative;
  z-index: 99;
  color: #f1f1f1;
  margin: 0 auto;
  font-size: 36px;
  font-weight: bold;
`;

export const AboutText = styled.div`
  text-align: center;
  padding: 20px 15px;
  max-width: 600px;
  position: relative;
  z-index: 99;
  color: #f1f1f1;
  margin: 0 auto;
  font-size: 1rem;
`;

export const Events = styled.div`
  position: relative;
  background-size: cover;
  background-image: url(https://www.fragomen.com/sites/default/files/styles/xl_image/public/Events_Portal.jpg);
  background-repeat: repeat;
  background-attachment: fixed;
  padding: 80px 0;
  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2C3E50;
    opacity: .9;
  }
`;

export const Event = styled.div`
  z-index: 99;
  position: relative;
  max-width: 600px;
  margin: 20px auto;
  padding: 10px 10px 20px 10px;
  background-color: #ffffff;
  border-radius: 6px;
`;

export const EventTitle = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 0;
  color: #333333;
  z-index: 100;
`;

export const EventDate = styled.h1`
  color: #333333;
  font-size: 14px;
  z-index: 100;
`;

export const EventPlace = styled.h1`
  font-size: 12px;
  color: #333333;
  z-index: 100;
`;

export const EventLocation = styled.h1`
  font-size: 12px;
  color: #333333;
  z-index: 100;
`;

export const Networks = styled.div`
  position: relative;
  background-repeat: repeat;
  background-attachment: fixed;
  padding: 80px 0;
  text-align: center;
`;

export const Network = styled.a`
  color: #e5bb31;

  &:hover {
    text-decoration: none;
  }
`;