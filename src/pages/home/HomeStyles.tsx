import styled from 'styled-components';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Container, Grid} from '@material-ui/core';

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 70px;
  overflow: auto;
  background-color: #542673;
`;

const HomeContainer = styled(Container)`
  margin-top: 40px;
`;

const SearchInputIcon = styled(SearchOutlinedIcon)`
  color: #fafafa;
  opacity: 80%;
`;

const GridSearchInput = styled(Grid)`
  float: left;
  width: 100%;
`;

const GridChatPanel = styled(Grid)`
  padding-top: 80px;
`;

export {
  HomeWrapper,
  SearchInputIcon,
  HomeContainer,
  GridSearchInput,
  GridChatPanel,
};
