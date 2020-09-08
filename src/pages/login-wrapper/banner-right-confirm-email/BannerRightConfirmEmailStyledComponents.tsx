import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import styled from 'styled-components';

const EmailConfirmationContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  top: 50%;
  justify-content: center;
  transform: translateY(-50%);
`

const HalfCardRightConfirmEmail = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 10px;
  background-color: #FAFAFA;
  padding: 20px;
`;

const GrayParagraphy = styled.p`
  color: #6f6f6f;
  text-align: center;
`

const VerifiedEmailIcon = styled(VerifiedUserIcon)`
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

const ErrorVerifiedEmailIcon = styled(ErrorOutlineIcon)`
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

export { VerifiedEmailIcon, HalfCardRightConfirmEmail, GrayParagraphy, EmailConfirmationContainer, ErrorVerifiedEmailIcon }
