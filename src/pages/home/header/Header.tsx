import { Grid } from "@material-ui/core";
import { ProviderContext, useSnackbar } from "notistack";
import { AxiosResponse, AxiosError } from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  HeaderBase,
  ChatIcon,
  BannerText,
  DivLogo,
  AvatarCircle,
  Avatar,
  DivPerfil,
  UserName,
  UserEmail,
  FixedHeader,
  HiddenInputFile,
  ChangeIcon,
  DivCredentials,
} from "./HeaderStyles";
import { useMutation } from "react-query";
import { IRequestResponse } from "../../../interfaces/request-response.interface";
import { changeProfilePicture } from "../../../services/users/user.service";

export interface IPictureUser {
  picture: string | ArrayBuffer | null;
}

const Header = () => {
  const snackBar: ProviderContext = useSnackbar();
  const [loggedUserName, setLoggedUserName] = useState<string | null>("");
  const [loggedUserEmail, setLoggedUserEmail] = useState<string | null>("");
  const [loggedUserPicture, setLoggedUserPicture] = useState<
    string | ArrayBuffer | null
  >("");
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
        variant: "error",
      });
    },
  });

  const clearSameInputFileReference = (e) => {
    e.target.value = "";
  };

  useEffect(() => {
    setLoggedUserName(localStorage.getItem("first_name"));
    setLoggedUserEmail(localStorage.getItem("email"));
    setLoggedUserPicture(localStorage.getItem("picture"));
  }, []);

  const handleChangeImage = (evt) => {
    const reader = new FileReader();
    const file = evt.target.files[0];
    const maxSizeFile = 2097152;
    if (file.size >= maxSizeFile) {
      snackBar.enqueueSnackbar("Tamanho da imagem não pode exceder 2mb", {
        variant: "error",
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

  const testReactSpy = () => {
    console.log("oi");
  };

  return (
    <FixedHeader maxWidth="lg">
      <HeaderBase container justify="space-between" alignItems="center">
        <Grid item>
          <DivLogo>
            <ChatIcon />
            <BannerText id="banner-text" onClick={testReactSpy}>
              React Chat
            </BannerText>
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
                    "https://avatarfiles.alphacoders.com/161/thumb-161468.png";
                }}
              />
              <ChangeIcon />
            </AvatarCircle>
            <DivCredentials>
              <UserName id="name-user-logged">{loggedUserName}</UserName>
              <UserEmail>{loggedUserEmail}</UserEmail>
            </DivCredentials>
          </DivPerfil>
        </Grid>
      </HeaderBase>
    </FixedHeader>
  );
};

export default Header;