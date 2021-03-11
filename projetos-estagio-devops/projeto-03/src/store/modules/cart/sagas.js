import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { clearCart } from './actions';


function* buyItems () {

    const state = yield select();

    const dataToRegister = [];
    const allowedProperties = {
        'numbers': '',
        'price': '',
        'type_id': ''
    };

    state.cart.products.forEach((product, index) => {

        dataToRegister[index] = {
            numbers: '',
            price: '',
            type_id: ''
        };
        Object.keys(product).forEach(prop => prop in allowedProperties ? dataToRegister[index][prop] = state.cart.products[index][prop]: '');

    });

    try {

        yield call(api.post, `/bets`, {
        
                bets_data: dataToRegister,
        
            },
            {
                headers: {

                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('@tgl/auth_token'))}`

                }

            }
        );

        toast.success('Compra efetuada com sucesso!');

        yield put(clearCart());

    }

    catch (err) {

        toast.error('Não foi possível salvar a sua compra!');

    }

    return;

} 

export default all([

    takeLatest('@cart/SAVE_REQUEST', buyItems)

]);