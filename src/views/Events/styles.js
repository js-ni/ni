import { injectGlobal } from 'emotion';
import styled from 'react-emotion';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background-color: #FFFFFF !important;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  padding: 0 20px;
  position: relative;
  overflow: hidden;
`;

export const Posts = styled.div`
  position: relative;
  width: 66%;
  box-sizing: border-box;
  padding-left: 40px;
  float: left;
  margin-top: 80px;
`;

export const Sidebar = styled.div`
  width: 33%;
  box-sizing: border-box;
  padding: 90px 40px;
  background-color: #f9f9f7;
  float: right;
  position: relative;
  overflow: hidden;
`;

export const Alert = styled.div`
  background: #fff;
  border-radius: 6px;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

export const AlertTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export const Post = styled.div`
  padding: 10px 10px 20px 10px;
  border-bottom: 1px solid #efefef;
`;

export const PostTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 0;
`;

export const PostDate = styled.h1`
  font-size: 14px;
  color: #4b4f56;
`;

export const PostPlace = styled.h1`
  font-size: 12px;
  color: #4b4f56;
`;

export const PostLocation = styled.h1`
  font-size: 12px;
  color: #90949c;
`;
