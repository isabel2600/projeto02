import React from 'react';

import { SeparatorDiv } from './styles';


const Separator = ({ defaultColor, ...rest }) => {
    
    return (
   
        <SeparatorDiv defaultColor={defaultColor} {...rest} />
  
    );

}

export default Separator;