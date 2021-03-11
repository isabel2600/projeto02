import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { SmSpan, ArrowRightIcon, CredentialsSection, ForgotPasswordLink, ForgotPasswordWrapper, SignUpWrapper } from './styles';
import Input from '../../components/Input';
import * as AuthActions from '../../store/modules/auth/actions';
import { toast } from 'react-toastify';
import InputGroupWrapper from '../../components/InputGroupWrapper';
import AuthContainer from '../../components/AuthContainer';
import AuthTextSection from '../../components/AuthTextSection';


const SignIn = ({ signInRequest }) => {

    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const history = useHistory();

    function handleSignIn (event) {

        event.preventDefault();
        const hasErrors = validateFormData();

        if (hasErrors) {

            toast.error('Não foi possível fazer login!');

        }

        else {
            
            signInRequest({ 
                email: emailInputRef.current.value,
                password: passwordInputRef.current.value
            });

        }

        return;

    }

    function validateFormData () {


        let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!emailInputRef.current.value || !emailRegex.test(emailInputRef.current.value) || emailInputRef.current.value !== 'josethomaz2003@gmail.com') {

            return true;
            
        }

        if (!passwordInputRef.current.value || passwordInputRef.current.value.length < 8) {

            return true;

        }

        return false;

    }

    function handleNavigateToSignUp () {

        history.push('/sign-up');

    }
    
    return (

        <AuthContainer>
            <AuthTextSection />
            <CredentialsSection>
                <SmSpan>
                    Authentication
                </SmSpan>
                <InputGroupWrapper onSubmit={handleSignIn}>
                    <Input type="email" placeholder="E-mail" ref={emailInputRef} required/>
                    <Input type="password" placeholder="Password" ref={passwordInputRef} required/>
                    <ForgotPasswordWrapper>
                        <ForgotPasswordLink to="/forgot-password">
                            I forget my password
                        </ForgotPasswordLink>
                    </ForgotPasswordWrapper>
                    <SignUpWrapper style={{ marginTop: 0 }} type="submit">
                        <SmSpan style={{ color: '#B5C401' }}>
                            Log In
                        </SmSpan>
                        <ArrowRightIcon color="#B5C401"/>
                    </SignUpWrapper>
                </InputGroupWrapper>
                <SignUpWrapper onClick={handleNavigateToSignUp}>
                    <SmSpan>
                        Sign Up
                    </SmSpan>
                    <ArrowRightIcon/>
                </SignUpWrapper>
            </CredentialsSection>
        </AuthContainer>
    
    );

}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);