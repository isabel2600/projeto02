import React from 'react';

import { SwitchButton } from './styles';


const SwitchBetTypeButton = ({ isSelected= true, backgroundColor, color, defaultColor, children, ...rest }) => {
  
    return (

        <SwitchButton 
            isSelected={isSelected}
            backgroundColor={backgroundColor}
            color={color}
            defaultColor={defaultColor} 
            {...rest}   
        >
            {children}
        </SwitchButton>

    );

}

export default SwitchBetTypeButton;