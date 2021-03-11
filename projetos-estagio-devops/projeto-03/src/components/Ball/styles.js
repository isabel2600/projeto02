import styled from 'styled-components';


export const BallDiv = styled.div`
  
    width: 55px; 
    height: 55px; 
    border-radius: 50%; 
    background-color: ${props => (props.isMarked ? props.backgroundColor.activeBg : '#ADC0C4')};
    display: flex; 
    justify-content: center; 
    align-items: center; 
    font-size: 20px; 
    font-weight: 500; 
    cursor: pointer; 
    transition: .2s linear;

    &:hover { 
    
        background-color: ${props => (props.isMarked ? props.backgroundColor.hoverBg : '#919a9b')};
         
    }

`;