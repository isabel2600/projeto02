import styled from 'styled-components';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';


export const SmSpan = styled.span `

    font-style: italic;
    font-weight: 500;
    font-size: 35px;
    color: #707070;

`; 

export const Container = styled.div `

    display: grid;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

`;

export const CredentialsSection = styled.div `

    grid-area: login; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
    margin: 4px 4px 0px 0px;

`;

export const ArrowRightIcon = styled(FiArrowRight) `

    margin-left: 10px;

`;

export const ArrowLeftIcon = styled(FiArrowLeft) `

    margin-left: 10px;

`;