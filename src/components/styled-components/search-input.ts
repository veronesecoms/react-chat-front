import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const SearchInput = styled(TextField)`
  && {
    .MuiFilledInput-root {
      background-color: #5c4f82;
      color: #fafafa;
      opacity: 95%;
    }
    .MuiInputLabel-filled {
      color: #fafafa;
      opacity: 80%;
    }
    .MuiFilledInput-underline:before {
      border-bottom: none;
    }
    .MuiFilledInput-underline:after {
      border-bottom: none;
    }
    .MuiFormHelperText-contained {
      color: #867ba2;
    }
  }
`;

export default SearchInput;
