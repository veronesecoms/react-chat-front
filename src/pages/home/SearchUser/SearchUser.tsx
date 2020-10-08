import { InputAdornment } from '@material-ui/core';
import React, { useState } from 'react';
import SearchInput from '../../../components/styled-components/search-input';
import { GridSearchInput, SearchInputIcon } from '../HomeStyles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ProviderContext, useSnackbar } from 'notistack';
import { useMessages } from '../../../contexts/MessagesContext';
import { useQuery } from 'react-query';
import { getUserMessages } from '../../../services/messages/messages.service';
import IMessage from '../../../interfaces/message.interface';
import { AxiosError } from 'axios';
import { IRequestResponse } from '../../../interfaces/request-response.interface';
import { useEmailDestinatary } from '../../../contexts/EmailDestinataryContext';

export interface ISearchUser {
  email: string;
}

const SearchUser = () => {
  const snackBar: ProviderContext = useSnackbar();
  const [searchedEmail, setSearchedEmail] = useState<string | null>(null);
  const { setMessages } = useMessages();
  const { setEmailDestinatary } = useEmailDestinatary();

  useQuery(['getMessagesFromUser', searchedEmail], getUserMessages, {
    enabled: searchedEmail !== null,
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (dataMessages: IMessage[]) => {
      setMessages(dataMessages);
      setEmailDestinatary(searchedEmail);
    },
    onError: (error: AxiosError<IRequestResponse>) => {
      snackBar.enqueueSnackbar(error.response?.data.message, {
        variant: 'error',
      });
    },
  });

  const searchSchemaValidation = Yup.object().shape({
    email: Yup.string()
      .required('Necessário informar o e-mail')
      .email('Não possui formato válido'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: searchSchemaValidation,
    onSubmit: (searchUserData: ISearchUser) => {
      setSearchedEmail(searchUserData.email);
    },
  });

  return (
    <GridSearchInput item xs={12} sm={12} md={12}>
      <form onSubmit={formik.handleSubmit} noValidate>
        <SearchInput
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
          id="input-search-user-email"
          fullWidth={true}
          autoComplete="off"
          label="Procurar pelo email"
          variant="filled"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchInputIcon />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </GridSearchInput>
  );
};

export default SearchUser;
