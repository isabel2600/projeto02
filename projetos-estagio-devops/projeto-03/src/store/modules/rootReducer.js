import { combineReducers } from 'redux';

import cart from './cart/reducer';
import auth from './auth/reducer';
import signUp from './signUp/reducer';


export default combineReducers({

    cart,
    auth,
    signUp
    
});