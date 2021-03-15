import React from 'react';

import { Container } from './styles';


const AuthContainer = ({ children }) => {
  
    return (

        <Container>
            {children}
        </Container>

    );

};

export default AuthContainer;