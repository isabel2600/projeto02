import React from 'react';

import { TextSection, MainTextSection, Text, ForWrapper, For, AppNameText } from './styles';


const AuthTextSection = () => {

    return (

        <TextSection>
            <MainTextSection>       
                <Text>
                    The
                </Text>
                <Text>
                    Greatest
                </Text>
                <Text>
                    App
                </Text>
            </MainTextSection>
            <ForWrapper>
                <For>
                    for
                </For>
                <AppNameText>
                    LOTTERY
                </AppNameText>
            </ForWrapper>
        </TextSection>

    );

};

export default AuthTextSection;