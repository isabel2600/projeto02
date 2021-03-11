import React from 'react';
import { connect } from 'react-redux';

import AuthRoutes from './auth.routes';
import MainRoutes from './main.routes';


const Routes = ({ auth }) => {

    return auth.signed ? <MainRoutes /> : <AuthRoutes />;

};

const mapStateToProps = state => ({

    auth: {
        
        username: state.auth.username,
        signed: state.auth.signed

    }

});

export default connect(mapStateToProps)(Routes);