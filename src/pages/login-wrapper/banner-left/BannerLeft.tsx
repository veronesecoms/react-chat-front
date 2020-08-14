import React from 'react';
import SvgLogin from '../../../resources/SvgLogin';
import { HalfCardLeft, HalfCardTitle } from './BannerLeftStyleComponents';

const BannerLeft = () => {

  return (
    <HalfCardLeft>
      <HalfCardTitle>Converse com seus amigos em poucos minutos!</HalfCardTitle>
      <SvgLogin />
    </HalfCardLeft>
  );
};

export default BannerLeft;
