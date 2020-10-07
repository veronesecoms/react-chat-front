import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const SoftInputField = styled(TextField)`
  && {
    .MuiFilledInput-root {
      background-color: rgb(84 38 115 / 6%);
    }
    .MuiFilledInput-underline:before {
      border-color: #808080a1;
    }
  }
`;

export default SoftInputField;
