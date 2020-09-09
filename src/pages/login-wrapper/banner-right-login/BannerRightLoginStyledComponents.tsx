import {Button} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styled from 'styled-components';

const HalfCardRight = styled.div`
  overflow-y: auto;
  width: 50%;
  height: 80%;
  border-radius: 5px;
  background-color: #fafafa;
  padding: 20px;
`;

const TitleRegister = styled.h1`
  color: #542673;
  text-align: center;
  margin-bottom: 30px;
  font-family: Lora, serif;
`;

const LoginButton = styled(Button)`
  height: 45px;
`;

const GraySeparator = styled.span`
  margin-left: 15px;
  margin-right: 15px;
  color: #7b7b7b;
`;

const TextAligner = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const TextLink = styled.span`
  margin-left: 5px;
  font-weight: 500;
  color: #9ea800;
  cursor: pointer;
  text-decoration: underline;
`;

const LoginLockIcon = styled(LockOutlinedIcon)`
  && {
    display: flex;
    text-align: center;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    font-size: 60px;
    color: #d3d925;
  }
`;

export {
  HalfCardRight,
  TitleRegister,
  LoginButton,
  GraySeparator,
  TextLink,
  LoginLockIcon,
  TextAligner,
};
