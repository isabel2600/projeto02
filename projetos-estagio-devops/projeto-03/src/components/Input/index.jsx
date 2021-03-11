import React, { forwardRef } from 'react';

import { StyledInput } from './styles';


const Input = ({ placeholder, ...rest }, ref) => {

  return (

    <StyledInput {...rest} placeholder={placeholder} ref={ref} />

  );

}

export default forwardRef(Input);