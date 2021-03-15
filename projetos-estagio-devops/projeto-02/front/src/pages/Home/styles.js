import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const MyBetsContainer = styled.div`
  
    margin-top: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

export const LinksSection = styled.div `

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;

`; 

export const Title = styled.p `

    color: #707070;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    font-style: italic;

`;

export const FiltersSection = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;

`;

export const SmSpan = styled.span `

    color: #868686;
    font-style: italic;
    font-size: 17px;
    margin-right: 20px;

`;

export const ButtonsContainer = styled.div `



`;

export const NewBetLink = styled(Link) `

    color: #B5C401;
    font-size: 24px;
    font-style: italic;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s color linear;

    &:hover {

        color: #B2B301;

    }

`;

export const RecentBetsContainer = styled.div `

    display: flex;
    margin-top: 40px;
    flex-direction: column;
    height: auto;

`;

export const Bet = styled.div `

    height: 100px;
    width: 800px;
    display: flex;
    align-items: center;
    margin: 15px 0px;

`;

export const BetInfo = styled.div `



`;

export const Numbers = styled.p `

    font-style: italic;
    font-weight: 500;
    color: #868686;
    font-size: 19px;
    margin-bottom: 15px;

`;

export const DateAndPriceSpan = styled.span `

    font-size: 16px;
    color: #868686;

`;