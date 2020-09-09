import styled from 'styled-components';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';

const HeaderBase = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  position: static;
  max-width: 100%;
  background-color: #542673;
`

const ChatIcon = styled(SmsOutlinedIcon)`
  && {
    font-size: 35px;
    color: #d3d925;
    display: flex;
  }
`

const BannerText = styled.h6`
  color: #fafafa;
  font-family: 'Roboto';
  font-size: 15px;
  opacity: 95%;
  margin-left: 5px;
`

export { HeaderBase, ChatIcon, BannerText }
