import React from 'react';

import { BallDiv } from './styles';


const Ball = ({ isMarked, backgroundColor, children, ...rest }) => {

    return (
        
        <BallDiv 
            isMarked={isMarked}
            backgroundColor={backgroundColor} 
            {...rest}
        >
            {children}
        </BallDiv>
        
    );
        
};
    
export default Ball;