import styled from 'styled-components';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';

const HeaderBase = styled.header`
  height: 70px;
  display: flex;
  position: fixed;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: #542673;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
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
`;

const AvatarCircle = styled.div`
  margin: 0 auto;
  display: flex;
  border: 2px solid #d3d925;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.div`
  margin: 0 auto;
  background-image: url('https://64.media.tumblr.com/0010af62b969459022372795bda6962f/tumblr_p7nlkhQL8n1x9q2v4o5_r1_250.jpg');
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: top center;
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
  margin-left: 15px;
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
};
