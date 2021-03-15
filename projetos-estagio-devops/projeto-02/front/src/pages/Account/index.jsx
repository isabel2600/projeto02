import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import InputGroupWrapper from '../../components/InputGroupWrapper';
import api from '../../services/api';
import { SmSpan, ArrowRightIcon, CredentialsSection, SignUpWrapper, Container } from './styles';


const Account = () => {

    const passwordInputRef = useRef(null);
    const passwordConfirmationInputRef = useRef(null);
    const history = useHistory();

    async function handleForgotPassword (event) {

        event.preventDefault();
        const hasErrors = validateFormData();

        if (hasErrors) {

            toast.error('Dados inválidos');
            return;

        }
        
        try {

            toast.info('Carregando...  ')

            await api.put('passwords-auth', {

                password: passwordInputRef.current.value,
                password_confirmation: passwordConfirmationInputRef.current.value,

            }, 
            {

                headers: {

                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('@tgl/auth_token'))}`

                }

            });

            toast.success('Senha alterada com sucesso!');
            history.push('/')
            return;

        }
        catch (err) {
            console.log(err.message)
            toast.error('Ocorreu um erro, tente novamente!');
            return;

        }

    }

    function validateFormData () {

        if (!passwordInputRef.current.value || passwordInputRef.current.value.length < 8) {

            return true;
            
        }
        if (!passwordConfirmationInputRef.current.value || passwordConfirmationInputRef.current.value !== passwordInputRef.current.value) {

            return true;
            
        }

        return false;

    }
    
    return (

        <Container>
            <CredentialsSection>
                <SmSpan>
                    Account
                </SmSpan>
                <InputGroupWrapper onSubmit={handleForgotPassword}>
                    <Input type="password" placeholder="Password" ref={passwordInputRef} required/>
                    <Input type="password" placeholder="Password confirmation" ref={passwordConfirmationInputRef} required/>
                    <SignUpWrapper style={{ marginTop: 40 }} type="submit">
                        <SmSpan style={{ color: '#B5C401' }}>
                            Confirm
                        </SmSpan>
                        <ArrowRightIcon color="#B5C401"/>
                    </SignUpWrapper>
                </InputGroupWrapper>
            </CredentialsSection>
        </Container>

    
    );

}

export default Account;