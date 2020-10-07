import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import * as bubbles from '../../resources/bubble-background.svg';

const Wrapper = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 0px -150px;
  background-color: #542673;
  background-image: url(${bubbles});
  overflow-x: hidden;
  overflow-y: auto;
`;

const FullContainerHeight = styled(Container)`
  height: 100%;
  display: flex;
`;

const GridBanners = styled(Grid)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export { Wrapper, FullContainerHeight, GridBanners };
