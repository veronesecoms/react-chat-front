import { keyframes } from '../../pages/Home/node_modules/styled-components';

const softFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`;

const completeFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: initial;
  }
`;

const showHide = keyframes`
  from {
    color: #542673
  }
  to {
    color: #d3d925;
  }
`;

const leftFadeIn = keyframes`
  from {
    opacity: 0.5;
    transform: translate3d(-60px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export { softFadeIn, completeFadeIn, leftFadeIn, showHide };
