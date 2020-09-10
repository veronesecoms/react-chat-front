import React from 'react';
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
  DivCredentials,
} from './HeaderStyles';

const Header = () => {
  return (
    <HeaderBase>
      <DivLogo>
        <ChatIcon />
        <BannerText>React Chat</BannerText>
      </DivLogo>
      <DivPerfil>
        <AvatarCircle>
          <Avatar />
        </AvatarCircle>
        <DivCredentials>
          <UserName>Renato</UserName>
          <UserEmail>renatim@hotmail.com.br</UserEmail>
        </DivCredentials>
      </DivPerfil>
    </HeaderBase>
  );
};

export default Header;
