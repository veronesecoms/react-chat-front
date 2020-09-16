import styled from 'styled-components';
import FaceIcon from '@material-ui/icons/Face';
import { Button } from '@material-ui/core';

const RegisterFaceIcon = styled(FaceIcon)`
  && {
    display: flex;
    text-align: center;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    font-size: 60px;
    color: #d3d925;
  }
`

const RegisterButton = styled(Button)`
  height: 45px;
`

const BackButton = styled(Button)`
  height: 45px;
`

export { RegisterFaceIcon, RegisterButton, BackButton }
