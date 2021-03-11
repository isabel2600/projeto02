import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';

import { 
    MainContainer, 
    Bet, 
    NewBetTitleSection, 
    BetContent, 
    BetDescriptionWrapper, 
    CurrentText, 
    ChooseGameText, 
    SwitchWrapper, 
    ChooseGameSection, 
    FillBetTitle, 
    Description, 
    BetGrid, 
    ButtonsWrapper, 
    CompleteGameButton, 
    ClearGameButton, 
    AddProductButton, 
    Cart, 
    SpanCart, 
    BetSelections, 
    BetInfo, 
    ProductNumbers, 
    PriceNTypeWrapper, 
    CurrentBetType, 
    PriceText, 
    TotalWrapper, 
    TotalValueText, 
    HandleSuccessDiv, 
    SaveSpan 
} from './styles';
import Footer from '../../components/Footer';
import SwitchBetTypeButton from '../../components/SwitchBetTypeButton';
import api from '../../services/api';
import Ball from '../../components/Ball';
import { isInArray } from '../../utils/isInArray';
import { getRandomInteger } from '../../utils/getRandomInteger';
import { formatCurrency } from '../../utils/formatCurrency';
import * as CartActions from '../../store/modules/cart/actions';
import EmptyCartText from '../../components/EmptyCart';
import Separator from '../../components/Separator';
import { currencyToFloat } from '../../utils/currencyToFloat';
import { generateRandomId } from '../../utils/generateRandomId';


const CreateBet = ({ cart, total, addToCartSuccess, removeFromCart, saveRequest }) => {

    const [betNumbersArray, setBetNumbersArray] = useState([1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
    const [currentBetType, setCurrentBetType] = useState('');
    const [markedNumbers, setMarkedNumbers] = useState([]);
    const [types, setTypes] = useState([]);

    const backgroundColorPossibilities = {

        'Lotofácil': {

            activeBg: '#7F3992',
            hoverBg: '#712e84'

        },
        'Quina': {

            activeBg: '#F79C31',
            hoverBg: '#df8d2e'

        },
        'Mega-Sena': {

            activeBg: '#27C383',
            hoverBg: '#13b772'

        },
        'Raspadinha': {

            activeBg: '#5271ff',
            hoverBg: '#4160ee'

        }

    };

    function fillBetNumbers (betType) {

        if (!types) {

            return;

        }

        const filteredBetsData = types.filter((type) => type.type === betType);

        let index = 0;
        const tmpBetNumbersArray = [];

        while (tmpBetNumbersArray.length < filteredBetsData[0].range) {

            tmpBetNumbersArray.push(index+1);
            index++;

        }

        setBetNumbersArray(tmpBetNumbersArray);

        return;

    }

    function maxBetAmount () {

        return types.filter((type) => (type.type) === currentBetType)[0].max_number;

    }

    function handleBetNumberClick (value) {

        if (markedNumbers.length >= maxBetAmount()
        
            &&

            !isInArray(value, markedNumbers)
        
        ) {

            return;

        }

        if (isInArray(value, markedNumbers)) {

            setMarkedNumbers((markedNumber) => markedNumber.filter(number => number !== value))
            return;

        }

        setMarkedNumbers([...markedNumbers, value ]);
        return;

    }

    function switchBetType (newBetType) {

        if (currentBetType === newBetType) {

            return;

        }

        setCurrentBetType(newBetType);
        clearGame();
        fillBetNumbers(newBetType);

    }

    function clearGame () {

        setMarkedNumbers([]);
        return;

    }

    function completeGame () {

        let randomBets = [];

        while (randomBets.length < maxBetAmount() - markedNumbers.length) {

            const randomNumber = getRandomInteger(1, types.filter((type) => (type.type) === currentBetType)[0].range)

            if (!isInArray(randomNumber, randomBets)) {
             
                randomBets.push(randomNumber);

            }

        }

        randomBets.push(...markedNumbers);
        setMarkedNumbers(randomBets);

        return;

    }

    function handleSuccess () {

        if (cart[0] && currencyToFloat(total) >= 30) {
            
            saveRequest();

        }
        else {

            toast.error('Valor mínimo de 30 reais!')

        }

        return;

    }

    const handleAddProduct = () => {

        const data = {

            price: types.filter((type) => (type.type) === currentBetType)[0].price, 
            currentBetType,
            numbers: markedNumbers,
            betColor: backgroundColorPossibilities[currentBetType].activeBg,
            id: generateRandomId(),
            type_id: types.filter((type) => (type.type) === currentBetType)[0].id

        };

        clearGame();
        return data.numbers.length === maxBetAmount() ? addToCartSuccess(data) : null;

    };

    useEffect(() => {

        async function loadTypesData () {

            const { data } = await api.get('/types');

            setTypes(data);
            setCurrentBetType(data[0].type);

            return;

        }

        loadTypesData();

    }, []);
    
    return (

        <MainContainer>
            <Bet>
                <NewBetTitleSection>
                    <p>NEW BET</p>
                    <CurrentText>FOR {currentBetType}</CurrentText>
                </NewBetTitleSection>
                <ChooseGameSection>
                    <ChooseGameText>Choose a game</ChooseGameText>
                    <SwitchWrapper>
                        {types.map((type, index) => (

                            <SwitchBetTypeButton
                                key={index}
                                isSelected={currentBetType === type.type} 
                                backgroundColor={type.color} 
                                color='#fff' 
                                defaultColor={type.color}
                                onClick={() => {

                                    switchBetType(type.type);

                                }}
                            >
                                {type.type}
                            </SwitchBetTypeButton>

                        ))}
                    </SwitchWrapper>
                </ChooseGameSection>
                <BetDescriptionWrapper>
                    <FillBetTitle>Fill your bet</FillBetTitle>
                    <Description>
                        {types[0] && currentBetType ? 
                           types.filter(type => type.type === currentBetType)[0].description
                        : 'Loading...'}
                    </Description>
                </BetDescriptionWrapper>
                <BetGrid>
                    {betNumbersArray.map((item, index) => (
                
                        <Ball 
                            onClick={() => handleBetNumberClick(item)} 
                            isMarked={isInArray(item, markedNumbers)}
                            backgroundColor={backgroundColorPossibilities[currentBetType]} 
                            key={index}
                        >
                            {item}
                        </Ball>

                    ))}
                </BetGrid>
                <ButtonsWrapper>
                    <div>
                        <CompleteGameButton onClick={completeGame}>
                            Complete game
                        </CompleteGameButton>
                        <ClearGameButton onClick={clearGame}>
                            Clear game
                        </ClearGameButton>
                    </div>
                    <AddProductButton onClick={handleAddProduct}>
                        <i data-feather="shopping-cart"></i>
                        <p>
                            Add to cart
                        </p>
                    </AddProductButton>
                </ButtonsWrapper>
            </Bet>
            <Cart className="cart">
                <SpanCart>
                    CART
                </SpanCart>
                <BetSelections>
                    {cart[0] ? cart.map((product, index) => (
    
                        <>
                            <BetContent key={index}>
                                <FiTrash2 color="#888888" size={24} style={{ cursor: 'pointer' }} onClick={() => removeFromCart(product.id)} />
                                <Separator defaultColor={product.betColor} style={{ height: 70 }}/>
                                <BetInfo>
                                    <ProductNumbers>
                                        {product.numbers.join(', ')}
                                    </ProductNumbers>
                                    <PriceNTypeWrapper>
                                        <CurrentBetType>
                                            {product.currentBetType}
                                        </CurrentBetType>
                                        <PriceText>
                                            {formatCurrency(product.price)}
                                        </PriceText>
                                    </PriceNTypeWrapper>
                                </BetInfo>
                            </BetContent>
                        </>

                    )): <EmptyCartText>Seu carrinho está vazio...</EmptyCartText>}
                </BetSelections>
                <TotalWrapper>
                    <span>CART</span>
                    <span style={{ marginLeft: 6 }}>TOTAL:</span>
                    <TotalValueText>{total}</TotalValueText>
                </TotalWrapper>
                <HandleSuccessDiv onClick={handleSuccess}>
                    <SaveSpan>
                        Save
                    </SaveSpan>
                    <i data-feather="arrow-right"></i>
                </HandleSuccessDiv>
            </Cart>
            <Footer>
                Copyright 2021 Luby Software
            </Footer>
        </MainContainer>
    
    );

}

const mapStateToProps = state => ({

    cart: state.cart.products.map(product => ({

        ...product

    })),
    total: formatCurrency(state.cart.products.reduce((total, product) => {

        return total +  product.price;

    }, 0))

});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateBet);