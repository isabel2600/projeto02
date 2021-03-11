import styled from 'styled-components';

export const MainContainer = styled.main`
    
    display: grid;
    grid-template-columns: auto 678px 350px auto;
    grid-template-rows: 20px auto 50px 80px;
    grid-template-areas: '. . . .'
                        '. bet cart .'
                        '. . . .'
                        'footer footer footer footer';
    gap: 35px;
        
    & > footer {
        
        background-color: #f7f7f7;
        grid-area: footer;
        border-top: 2.5px solid #ebebeb;
        color: #707070;
        
    }

`;

export const Bet = styled.div `

    grid-area: bet;

`;

export const NewBetTitleSection = styled.div `

    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 300;
    font-style: italic;
    color: #707070;

    & > p {
        
        margin-right: 9px;
        font-weight: 700;
        
    }

`;

export const BetContent = styled.div `

    display: flex;
    align-items: center;

`;

export const BetDescriptionWrapper = styled.div `

    margin-top: 28px;

`;

export const CurrentText = styled.span `

    text-transform: uppercase;
    color: #707070;
    font-style: italic;
    font-size: 24px;
    font-weight: 700;
    align-self: start;

`;

export const ChooseGameText = styled.span `

    margin-bottom: 20px;

`;

export const SwitchWrapper = styled.div `

    display: flex;
    align-items: center;
    flex-direction: row;  

`;

export const ChooseGameSection = styled.div `

    display: flex;
    font-size: 17px;
    font-weight: 500;
    font-style: italic;
    color: #868686;
    flex-direction: column;

`;

export const FillBetTitle = styled.span `

    font-size: 17px;
    color: #868686;
    font-weight: 500;
    font-style: italic;
    margin-bottom: 10px;

`;

export const Description = styled.p `

    font-size: 17px;
    color: #868686;
    font-weight: 300;
    font-style: italic;
    margin: 0;

`;

export const BetGrid = styled.div `

    display: grid;
    grid-template-columns: repeat(9, 65px);
    gap: 10px;
    color: #fff;
    margin-top: 30px;

`;

export const ButtonsWrapper = styled.button `

    display: flex;
    justify-content: space-between;
    margin-top: 35px;
    width: 80%;
    background-color: transparent;
    border: 0px;

`;

export const CompleteGameButton = styled.button `

    width: 135px;
    height: 52px;
    border: 1px solid #27C383;
    border-radius: 10px;
    font-size: 13px;
    cursor: pointer;
    color: #27C383;
    font-weight: 500;
    transition: .3s linear;
    margin-right: 20px;

    &:hover {

        background-color: rgb(234, 230, 230);

    }

`;

export const ClearGameButton = styled.button `

    width: 135px;
    height: 52px;
    border: 1px solid #27C383;
    border-radius: 10px;
    font-size: 13px;
    cursor: pointer;
    color: #27C383;
    font-weight: 500;
    transition: .3s linear;

    &:hover {

        background-color: rgb(234, 230, 230);

    }

`;

export const AddProductButton = styled.button `

    width: 135px;
    height: 52px;
    background-color: #27C383;
    border: 1px solid #27C383;
    color: #fff;
    font-weight: 700;
    transition: .3s linear;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 210px;
    border-radius: 10px;

    &:hover {

        background-color: #13b772;

    }

    & > p {
        
        margin-left: 10px;
        
    }

`;

export const Cart = styled.div `

    background-color: #fff;
    border-radius: 10px;
    max-height: 600px;
    border: 1px solid #E2E2E2;
    grid-area: cart;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const SpanCart = styled.span `

    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 700;
    font-style: italic;
    border: 0px;
    color: #707070;
    font-size: 24px;

`;

export const BetSelections = styled.div `

    flex-direction: column;
    color: #868686;
    overflow-y: scroll;
    height: 200px;
    align-items: center;
    margin-bottom: 40px;
    padding: 15px 0px 10px 0px;
    align-items: center;

    &::-webkit-scrollbar-thumb {
        
        border-radius: 12px;
        background-color: #E2E2E2;
        
    }

    &::-webkit-scrollbar {
        
        width: 5px;
        
    }

`;

export const BetInfo = styled.div `

    display: flex;
    flex-direction: column;

`;

export const ProductNumbers = styled.span `

    font-style: italic;
    font-weight: 500;
    font-size: 13px;
    width: 230px;

`;

export const PriceNTypeWrapper = styled.div `

    display: flex;
    align-items: center;
    margin-top: 9px;

`;

export const CurrentBetType = styled.span `

    font-size: 16px;
    font-weight: 500;
    font-style: italic;
    margin-right: 14px; 

`;

export const PriceText = styled.span `

    font-size: 16px;

`;

export const TotalWrapper = styled.div `

    text-transform: uppercase;
    color: #707070;
    align-self: start;
    font-size: 24px;
    margin-top: 15px;
    margin-left: 18px;
    margin-bottom: 35px;
    border: 0px;

    & > span:first-of-type {

        font-weight: 700;
        font-style: italic;
        margin-right: 5px;
        border: 0px;

    }

`;

export const TotalValueText = styled.span `



`;

export const HandleSuccessDiv = styled.div `

    background-color: #e2e2e2;
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    color: #27C383;
    font-style: italic;
    font-weight: 500;
    cursor: pointer;
    border-top: 1px solid rgb(208, 208, 208);
    transition: 0.3s background linear;

    &:hover {
        
        background-color: #dfdfdf;
        
    }

`;

export const SaveSpan = styled.span `

    font-weight: 700;
    font-style: italic;
    margin-right: 5px;

`; 