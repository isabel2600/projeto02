import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { signUpSuccess } from './actions';


function* signUp ({ data }) {

    try {

        const response = yield call(api.post, `/users`, {
        
            username: data.username,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation

        });

        localStorage.setItem('@tgl/auth_token', JSON.stringify(response.data.token));
        response.data.signed = true;

        toast.success('Cadastro efetuado com sucesso!');
        history.push('/')
        
        yield put(signUpSuccess(response.data));

    }

    catch (err) {

        toast.error('Não foi possível criar a sua conta!');

    }

    return;

} 

export default all([
    takeLatest('@sign_up/SIGN-UP_REQUEST', signUp)
]);