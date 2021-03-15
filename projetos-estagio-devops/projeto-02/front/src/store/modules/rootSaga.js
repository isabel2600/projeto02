import { all } from 'redux-saga/effects';

import cart from './cart/sagas';
import auth from './auth/sagas';
import signUp from './signUp/sagas';


function* rootSaga () {
    return yield all([
        cart,
        auth,
        signUp
    ])
}

export default rootSaga;