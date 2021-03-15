import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

export const HeaderContainer = styled.header`
  
    width: 100%;
    height: 76px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2.5px solid #ebebeb;
    color: #707070;

    & > .logo-section {

        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 50px;

    }

    & > .logo-section > div {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 76px;

    }

    & > .logo-section > div > .border {

        position: absolute;
        top: 72px;
        width: 110px;
        border-bottom: 6px solid #b5c401;
        border-radius: 6px;

    }

    & > .logo-section > div > span:first-of-type {

        font-size: 44px;
        font-weight: 700;
        font-style: italic;
        cursor: pointer;
        transition: .3s color linear;

    }

    & > .logo-section > div + span {

        font-size: 18px;
        font-weight: 500;
        font-style: italic;
        margin-left: 60px;
        cursor: pointer;
        transition: .3s color linear;

    }

    & > .profile-section {

        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 50px;

    }

    & > .profile-section > .logout {

        display: flex;
        justify-content: center;
        align-items: center;

    }

    & > .profile-section span {

        font-size: 18px;
        font-weight: 500;
        font-style: italic;
        cursor: pointer;
        transition: .3s color linear;

    }

    & > .profile-section > span {

        margin-right: 50px;
        cursor: pointer;
        transition: .3s color linear;

    }

    & > .profile-section > .logout > span {

        margin-right: 5px;
        cursor: pointer;
        transition: .3s color linear;

    }

    & span:hover {

        color: #9f9393;

    }

`;


export const ArrowRightIcon = styled(FiArrowRight) `

    font-size: 22px;
    margin-left: 5px;
    cursor: pointer;

`;