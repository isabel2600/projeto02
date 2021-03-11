import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { HeaderContainer, ArrowRightIcon } from './styles';
import * as AuthActions from '../../store/modules/auth/actions';


const Header = ({ signOut, goToAccount }) => {

    const history = useHistory();
    const route = useLocation();

    function handleSignOut () {

        signOut();

    }

    function handleNavigateToHome () {

        history.push('/');
        return;

    }

    function handleNavigateToAccount () {

        history.push('/account');
        return;

    }
  
    return (

        <HeaderContainer>
            <div className="logo-section">
                <div onClick={handleNavigateToHome}>
                    <span>TGL</span>
                    <div className="border"></div>
                </div>
                <span onClick={handleNavigateToHome}>{route.pathname === '/create-bet' ? 'Home': ''}</span>
            </div>
            <div className="profile-section">
                <span onClick={handleNavigateToAccount}>
                    Account
                </span>
                <div className="logout" onClick={handleSignOut}>
                    <span>
                        Logout
                    </span>
                    <ArrowRightIcon />
                </div>
            </div>
        </HeaderContainer>

    );

}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(Header);