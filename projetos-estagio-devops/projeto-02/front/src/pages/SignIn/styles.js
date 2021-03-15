import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';


export const SmSpan = styled.span `

    font-style: italic;
    font-weight: 500;
    font-size: 35px;
    color: #707070;

`; 

export const TextSection = styled.div `

    grid-area: text;
    display : flex;
    flex-direction: column;
    justify-content: center;

`; 

export const MainText = styled.div `

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

export const ForWrapper = styled.div `

    display: flex; 
    align-items: center; 
    justify-content: center; 
    flex-direction: column;
    width: 250px;

`;

export const AppNameText = styled.p `

    font-size: 82px;
    font-style: italic;
    text-align: center;
    font-weight: 700;
    color: #707070;
    text-transform: uppercase;

`; 

export const CredentialsSection = styled.div `

    grid-area: login; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`; 

export const ForgotPasswordLink = styled(Link) `

    text-decoration: none;
    color: #C1C1C1;
    font-size: 16px;
    transition: .3s color linear;

    &:hover {

        color: #aaa;

    }

`;

export const SignUpWrapper = styled.button `

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 35px;
    color: #707070;
    cursor: pointer;
    text-decoration: none;
    border: 0px;
    background-color: transparent;

    &:hover {

        color: #444;

    }

`;

export const ForgotPasswordWrapper = styled.div `

    display: flex;
    height: 50px;
    justify-content: flex-end;
    margin: 20px 15px 0px 0px;

`;

export const ArrowRightIcon = styled(FiArrowRight) `

    margin-left: 10px;

`;