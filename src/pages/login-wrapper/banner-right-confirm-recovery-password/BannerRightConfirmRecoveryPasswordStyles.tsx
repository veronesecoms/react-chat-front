import VpnKeyIcon from '@material-ui/icons/VpnKey';
import styled from 'styled-components';

const KeyIcon = styled(VpnKeyIcon)`
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

const HalfCardConfirmRecoveryPassword = styled.div`
  overflow-y: auto;
  width: 50%;
  height: 80%;
  border-radius: 4px;
  background-color: #fafafa;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export { KeyIcon, HalfCardConfirmRecoveryPassword };
