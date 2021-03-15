import styled from "styled-components";


export const StyledInput = styled.input `

    width: 100%;
    border: 0px;
    border-bottom: 1px solid #ccc;
    padding: 30px;

    &:first-of-type {

        border-radius: 14px 14px 0px 0px;

    }

    &::placeholder {

        color: #9D9D9D;
        font-weight: 500;
        font-style: italic;
        font-size: 15px;

    }

`;