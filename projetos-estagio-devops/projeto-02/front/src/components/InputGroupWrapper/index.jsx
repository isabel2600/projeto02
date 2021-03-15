import React from 'react';

import { InputWrapper } from './styles';


const InputGroupWrapper = ({ children, ...rest }) => {
    
    return (
  
        <InputWrapper {...rest}>
            {children}
        </InputWrapper>

    );

};

export default InputGroupWrapper;