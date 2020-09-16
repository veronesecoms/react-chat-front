import { Grid, IconButton } from '@material-ui/core';
import styled from 'styled-components';

const GridContainerMessage = styled(Grid)`
  padding: 10px;
  bottom: 0;
  background-color: #5c4f82;
  position: absolute;
  left: 0;
  right: 0;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`

const IconButtonWrapper = styled(IconButton)`
  padding: 8px;
  position: absolute;
  margin-right: 5px;
  right: 0;
  background-color: #3cc6b7;
  color: #fafafa;
  &:hover {
    background-color: #31a296
  }
`

const GridInput = styled(Grid)`
  display: flex;
  align-items: center;
  position: relative;
`

export { GridContainerMessage, IconButtonWrapper, GridInput };
