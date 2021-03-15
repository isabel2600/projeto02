import styled from "styled-components";


export const Container = styled.div `

    display: grid;
    grid-template-columns:  auto 420px 420px auto;
    grid-template-rows: auto 500px auto;
    grid-template-areas: 
        '. . . .'
        '. text login .'
        '. . . .';
    height: 100vh;

`;