import { Grid } from "@material-ui/core";
import { ProviderContext, useSnackbar } from "notistack";
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

const Header = () => {
  const snackBar: ProviderContext = useSnackbar();
  const [loggedUserName, setLoggedUserName] = useState<string | null>("");
  const [loggedUserEmail, setLoggedUserEmail] = useState<string | null>("");
  const [loggedUserPicture, setLoggedUserPicture] = useState<
    string | ArrayBuffer | null
  >("");
  const inputFileRef = useRef<HTMLInputElement>(null);

  const clearSameInputFileReference = (e) => {
    e.target.value = "";
  };

  useEffect(() => {
    setLoggedUserName(localStorage.getItem("first_name"));
    setLoggedUserEmail(localStorage.getItem("email"));
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
        setLoggedUserPicture(reader.result);
      };
    }
  };

  const handleInputFileClick = () => {
    inputFileRef.current?.click();
  };

  return (
    <FixedHeader maxWidth="lg">
      <HeaderBase container justify="space-between" alignItems="center">
        <Grid item>
          <DivLogo>
            <ChatIcon />
            <BannerText>React Chat</BannerText>
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
              <UserName>{loggedUserName}</UserName>
              <UserEmail>{loggedUserEmail}</UserEmail>
            </DivCredentials>
          </DivPerfil>
        </Grid>
      </HeaderBase>
    </FixedHeader>
  );
};

export default Header;
