function signUpRequest (data) {

    return {

        type: '@sign_up/SIGN-UP_REQUEST',
        data

    };

}

export { signUpRequest };

function signUpSuccess (data) {

    return {

        type: '@sign_up/SIGN-UP_SUCCESS',
        data

    };

}

export { signUpSuccess };