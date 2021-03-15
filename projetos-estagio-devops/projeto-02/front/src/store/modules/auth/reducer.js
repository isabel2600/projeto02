import history from '../../../services/history';

const initialState = { 
  
    email: '', 
    signed: !!localStorage.getItem('@tgl/auth_token') 

};

function auth (state = initialState, action) {

    switch(action.type) {

        case '@auth/SIGN-IN_SUCCESS': {

            const { email, signed } = action.data;

            return {

                ...state,
                email,
                signed, 

            }

        }

        case '@auth/SIGN-OUT': {

            localStorage.clear();
            history.push('/');

            return {

                ...state,
                email: '',
                signed: false

            };
        
        }

        default:

            return state;

    }

}

export default auth;