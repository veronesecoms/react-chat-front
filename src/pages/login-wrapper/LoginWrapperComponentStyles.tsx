import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #f58800;
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
