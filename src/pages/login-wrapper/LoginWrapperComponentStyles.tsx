import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import bubbles from '../../resources/bubble-background.svg';

const Wrapper = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #542673;
  background-repeat: repeat;
  background-position: 300px 0;
  background-image: url(${bubbles});
  overflow-x: hidden;
  overflow-y: auto;
`

const FullContainerHeight = styled(Container)`
  height: 100%;
  display: flex;
`

const GridBanners = styled(Grid)`
  height: 100%;
  display: flex;
  align-items: center;
`

export { Wrapper, FullContainerHeight, GridBanners };
