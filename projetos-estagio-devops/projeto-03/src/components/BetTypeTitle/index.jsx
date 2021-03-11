import React from 'react';

import { BetType } from './styles';


const BetTypeTitle = ({ children, color }) => {

  return (

    <BetType color={color}>
        {children}
    </BetType>

  );

}

export default BetTypeTitle;