import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { signInSuccess } from './actions';


function* auth ({ data }) {

    try {

        const response = yield call(api.post, `/sessions`, {
        
            email: data.email,
            password: data.password

        });

        localStorage.setItem('@tgl/auth_token', JSON.stringify(response.data.token));
        response.data.signed = true;

        yield put(signInSuccess(response.data));

    }

    catch (err) {

        toast.error('Não foi possível fazer o login!');

    }

    return;

} 

export default all([
    takeLatest('@auth/SIGN-IN_REQUEST', auth)
]);