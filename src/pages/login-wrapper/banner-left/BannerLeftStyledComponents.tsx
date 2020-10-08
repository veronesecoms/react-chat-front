import styled from 'styled-components';
import { ReactComponent as SvgLogin } from '../../../resources/svg-login-cellphone.svg';
import {
  softFadeIn,
  completeFadeIn,
  leftFadeIn,
  showHide,
} from '../../../utils/animations/showAnimations';

const SvgCellPhone = styled(SvgLogin)`
  #left-cellphone {
    animation: ${softFadeIn} 1s;
  }

  .right-cellphone {
    opacity: 0;
    animation: ${completeFadeIn} 0.6s;
    animation-delay: 0.4s;
    animation-fill-mode: forwards;
  }

  .message-cellphone {
    opacity: 0;
    animation: ${leftFadeIn} 0.5s;
    animation-delay: 0.9s;
    animation-fill-mode: forwards;
  }
`;

const HalfCardLeft = styled.div`
  width: 50%;
  height: 80%;
  border-radius: 30px 0px 0px 30px;
  background-color: #542673;
  padding: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const HalfCardTitle = styled.h3`
  font-size: 2em;
  color: #d3d925;
  text-align: center;
  font-family: Lora, serif;
  min-height: 40px;
`;

const DotTitle = styled.span`
  font-size: 3em;
  color: #d3d925;
  text-align: center;
  font-family: Arial, serif;
  margin-left: 5px;
  margin-top: 18px;
  animation-name: ${showHide};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

export { HalfCardLeft, HalfCardTitle, SvgCellPhone, DotTitle };
