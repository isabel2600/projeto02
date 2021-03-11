function signUp (state = { email: '', signed: !!localStorage.getItem('@tgl/auth_token') }, action) {

    switch(action.type) {

        case '@sign_up/SIGN-UP_SUCCESS': {

            const { $attributes, signed } = action.data;

            window.location.reload();

            return {

                ...state,
                email: $attributes.email,
                signed: signed

            };

        }

        default:

            return state;

    }

}

export default signUp;