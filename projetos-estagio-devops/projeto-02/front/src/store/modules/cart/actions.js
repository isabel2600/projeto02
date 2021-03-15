function saveRequest () {

    return {

        type: '@cart/SAVE_REQUEST'

    };

}

export { saveRequest };

function addToCartSuccess (product) {

    return {

        type: '@cart/ADD_SUCCESS',
        product

    };

}

export { addToCartSuccess };

function removeFromCart (id) {

    return {

        type: '@cart/REMOVE',
        id

    };

}

export { removeFromCart };

function clearCart () {

    return {
        
        type: '@cart/CLEAR-CART'

    }

}

export { clearCart };