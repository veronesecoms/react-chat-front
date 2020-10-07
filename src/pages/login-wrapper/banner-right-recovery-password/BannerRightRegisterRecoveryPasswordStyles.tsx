import MailOutlineIcon from '@material-ui/icons/MailOutline';
import styled from 'styled-components';

const EmailIcon = styled(MailOutlineIcon)`
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

const HalfCardRecoveryPassword = styled.div`
  overflow-y: auto;
  width: 50%;
  height: 60%;
  border-radius: 4px;
  background-color: #fafafa;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export { EmailIcon, HalfCardRecoveryPassword };
