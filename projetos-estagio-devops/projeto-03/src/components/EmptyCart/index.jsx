import React from 'react';

import { EmptyCartSpan } from './styles';


const EmptyCartText = ({ children }) => {
  
    return (
  
        <EmptyCartSpan>
            {children}
        </EmptyCartSpan>

    );

}

export default EmptyCartText;