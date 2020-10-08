import styled from 'styled-components';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import { Avatar, Container, Grid } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import rotate from '../../../utils/animations/rotate';

const HeaderBase = styled(Grid)`
  height: 70px;
  background-color: #542673;
`;

const ChatIcon = styled(SmsOutlinedIcon)`
  && {
    font-size: 35px;
    color: #d3d925;
    display: flex;
  }
`;

const BannerText = styled.h6`
  color: #fafafa;
  font-family: 'Roboto';
  font-size: 15px;
  opacity: 95%;
  margin-left: 5px;
`;

const DivLogo = styled.div`
  display: inline-flex;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

const AvatarCircle = styled.div`
  margin: 0 auto;
  display: flex;
  border: 2px solid #d3d925;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

const AvatarUser = styled(Avatar)`
  margin: 0 auto;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const DivPerfil = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;

const UserName = styled.p`
  color: #fafafa;
  margin: 0;
  opacity: 95%;
  font-size: 15px;
`;

const UserEmail = styled.p`
  margin: 0;
  color: #c1c1c1;
  opacity: 95%;
  font-size: 13px;
`;

const DivCredentials = styled.div`
  padding: 5px;
  margin-left: 15px;
  border-radius: 3px;
  transition-duration: 0.5s;
  &:hover {
    background-color: #80808029;
  }
`;

const FixedHeader = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const ChangeIcon = styled(CachedIcon)`
  position: absolute;
  margin: 0 auto;
  color: #3cc6b7;
  opacity: 0;
  transition: 0.5s;
  &:hover {
    opacity: 1;
  }
  animation: ${rotate} 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`;

const HiddenInputFile = styled.input`
  display: none;
`;

const MenuAnchor = styled.a`
  transition-duration: 2s;
  animation-duration: 1s;
  background-color: white;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 1;
  &:hover {
    background-color: white !important;
  }
`;

export {
  HeaderBase,
  ChatIcon,
  BannerText,
  DivLogo,
  AvatarCircle,
  Avatar,
  DivPerfil,
  UserName,
  UserEmail,
  DivCredentials,
  FixedHeader,
  ChangeIcon,
  HiddenInputFile,
  MenuAnchor,
  AvatarUser,
};
