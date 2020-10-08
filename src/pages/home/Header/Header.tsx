import { Grid, Menu, MenuItem } from '@material-ui/core';
import { ProviderContext, useSnackbar } from 'notistack';
import { AxiosResponse, AxiosError } from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import {
  HeaderBase,
  ChatIcon,
  BannerText,
  DivLogo,
  AvatarCircle,
  Avatar,
  DivPerfil,
  UserName,
  MenuAnchor,
  UserEmail,
  FixedHeader,
  HiddenInputFile,
  ChangeIcon,
  DivCredentials,
} from './HeaderStyles';
import { useMutation } from 'react-query';
import { IRequestResponse } from '../../../interfaces/request-response.interface';
import { changeProfilePicture } from '../../../services/users/user.service';

export interface IPictureUser {
  picture: string | ArrayBuffer | null;
}

const Header = () => {
  const history = useHistory();
  const snackBar: ProviderContext = useSnackbar();
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const [loggedUserName, setLoggedUserName] = useState<string | null>('');
  const [loggedUserEmail, setLoggedUserEmail] = useState<string | null>('');
  const [loggedUserPicture, setLoggedUserPicture] = useState<
    string | ArrayBuffer | null
  >('');
  const inputFileRef = useRef<HTMLInputElement>(null);

  const [mutateChangeProfilePicture] = useMutation<
    AxiosResponse<IRequestResponse>,
    AxiosError<IRequestResponse>,
    IPictureUser
  >(changeProfilePicture, {
    onSuccess: (
      response: AxiosResponse<IRequestResponse>,
      data: IPictureUser
    ) => {
      setLoggedUserPicture(data.picture);
    },
    onError: (error: AxiosError<IRequestResponse>) => {
      snackBar.enqueueSnackbar(error.response?.data.message, {
        variant: 'error',
      });
    },
  });

  const clearSameInputFileReference = (e) => {
    e.target.value = '';
  };

  useEffect(() => {
    setLoggedUserName(localStorage.getItem('first_name'));
    setLoggedUserEmail(localStorage.getItem('email'));
    setLoggedUserPicture(localStorage.getItem('picture'));
  }, []);

  const handleChangeImage = (evt) => {
    const reader = new FileReader();
    const file = evt.target.files[0];
    const maxSizeFile = 2097152;
    if (file.size >= maxSizeFile) {
      snackBar.enqueueSnackbar('Tamanho da imagem não pode exceder 2mb', {
        variant: 'error',
      });
    } else {
      reader.readAsDataURL(file);
      reader.onload = () => {
        mutateChangeProfilePicture({ picture: reader.result });
      };
    }
  };

  const handleInputFileClick = () => {
    inputFileRef.current?.click();
  };

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <FixedHeader maxWidth="lg">
      <HeaderBase container justify="space-between" alignItems="center">
        <Grid xs={12} sm={3} item>
          <DivLogo>
            <ChatIcon />
            <BannerText id="banner-text">React Chat</BannerText>
          </DivLogo>
        </Grid>
        <Grid item>
          <DivPerfil>
            <AvatarCircle onClick={handleInputFileClick}>
              <HiddenInputFile
                onClick={clearSameInputFileReference}
                ref={inputFileRef}
                id="input-file-profile-image"
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleChangeImage}
              />
              <Avatar
                id="profile-picture"
                src={loggedUserPicture}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://avatarfiles.alphacoders.com/161/thumb-161468.png';
                }}
              />
              <ChangeIcon />
            </AvatarCircle>
            <DivCredentials>
              <MenuAnchor
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                <UserName id="name-user-logged">{loggedUserName}</UserName>
                <UserEmail>{loggedUserEmail}</UserEmail>
              </MenuAnchor>
              <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </DivCredentials>
          </DivPerfil>
        </Grid>
      </HeaderBase>
    </FixedHeader>
  );
};

export default Header;
