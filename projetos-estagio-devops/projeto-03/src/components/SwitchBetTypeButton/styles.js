import styled from 'styled-components';


export const SwitchButton = styled.button `

    border-radius: 100px;
    width: 113px;
    height: 34px;
    font-size: 12px;
    font-style: italic;
    font-weight: bold;
    cursor: pointer;
    background-color: ${props => (props.isSelected ? props.backgroundColor : '#fff')};
    color: ${props => (props.isSelected ? props.color : props.defaultColor)};
    border: 2px solid ${props => props.defaultColor};
    margin-right: 15px;
    transition: .3s linear;

    &:hover {
        
        color: ${props => props.color};
        background-color: ${props => props.backgroundColor};
        
    }

`;