import styled from "styled-components";


export const TextSection = styled.div `

    grid-area: text;
    display : flex;
    flex-direction: column;
    justify-content: center;

`; 

export const MainTextSection = styled.div `

    color: #707070;
    font-style: italic;
    font-weight: 500;
    font-size: 65px;
    width: 244px;
    displaY : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`; 

export const Text = styled.p `



`; 

export const ForWrapper = styled.div `

    display: flex; 
    align-items: center; 
    justify-content: center; 
    flex-direction: column;
    width: 250px;

`; 

export const For = styled.button `

    background-color: #B5C401;
    color: #fff;
    width: 144px;
    height: 39px;
    border-radius: 100px;
    border: 0px;
    font-style: italic;
    font-size: 20px;
    margin: 30px 0px;
    cursor: pointer;
    font-weight: 500;
    transition: .3s background-color linear;

    &:hover {

        background-color: #A2C000;

    }

`; 

export const AppNameText = styled.p `

    font-size: 82px;
    font-style: italic;
    text-align: center;
    font-weight: 700;
    color: #707070;
    text-transform: uppercase;

`;

