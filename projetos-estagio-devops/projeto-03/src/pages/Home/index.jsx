import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { connect } from 'react-redux';

import Separator from '../../components/Separator';
import SwitchBetTypeButton from '../../components/SwitchBetTypeButton';
import api from '../../services/api';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { formatCurrency } from '../../utils/formatCurrency';
import { MyBetsContainer, LinksSection, Title, FiltersSection, SmSpan, ButtonsContainer, NewBetLink, RecentBetsContainer, Bet, BetInfo, Numbers, DateAndPriceSpan } from './styles';
import BetTypeTitle from '../../components/BetTypeTitle';
import EmptyCartText from '../../components/EmptyCart';


const Home = () => {

    const [betsData, setBetsData] = useState([]);
    const [currentBetType, setCurrentBetType] = useState('');
    const [types, setTypes] = useState([]);

    function switchBetType (newBetType) {

        if (currentBetType === newBetType) {

            return;

        }

        setCurrentBetType(newBetType);

    }

    useEffect(() => {

        async function loadTypesData () {

            const { data } = await api.get('/types', {
                
                headers: {

                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('@tgl/auth_token'))}`
                
                }

            });

            setTypes(data);
            setCurrentBetType(data[0].type)
            
            return;

        }

        loadTypesData();

    }, []);

    useEffect(() => {

        async function loadBetsData () {

            if (!currentBetType) {

                return;

            }

            const { data } = await api.get(`/bets?type=${currentBetType}`);

            setBetsData(data.data);

            return;

        }

        loadBetsData();

    }, [currentBetType]);
    
    return (

        <MyBetsContainer>
            <LinksSection>
                <Title>
                    Recent games
                </Title>
                <FiltersSection>
                    <SmSpan>
                        Filters
                    </SmSpan>
                    <ButtonsContainer>
                    {types.map((type) => (

                        <SwitchBetTypeButton
                            key={type.id}
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
                    </ButtonsContainer>
                </FiltersSection>
                <NewBetLink to='/create-bet'>
                    New Bet
                    <FiArrowRight color='#B5C401' size={26} style={{ marginLeft: 5 }} />
                </NewBetLink>
            </LinksSection>
            <RecentBetsContainer>
                {betsData.length > 0 ? betsData.map((bet) => (

                    <>
                        <Bet key={bet.id}>
                            <Separator defaultColor={bet.color}>
                    
                            </Separator>
                            <BetInfo>
                                <Numbers>
                                    {bet.numbers}
                                </Numbers>
                                <DateAndPriceSpan>
                                    {new Date(bet.created_at).toLocaleString('pt-BR')} - ({formatCurrency(bet.price)})
                                </DateAndPriceSpan>
                                <BetTypeTitle color={bet.color}>
                                    {capitalizeFirstLetter(bet.type)}
                                </BetTypeTitle>
                            </BetInfo>
                        </Bet>
                    </>

                )): <EmptyCartText>Você não possui nenhuma aposta recente...</EmptyCartText>}
            </RecentBetsContainer>
        </MyBetsContainer>

    
    );

};

export default connect()(Home);