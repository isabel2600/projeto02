const initialState = {

    products: []

};

function cart (state = initialState, action) {

    switch(action.type) {

        case '@cart/ADD_SUCCESS': {

            const { product } = action;

            const newProduct = state.products;
            newProduct.push(product);

            return {

                ...state,
                products: newProduct

            }

        }

        case '@cart/REMOVE': {

            const newProduct = state.products.filter(product => product.id !== action.id);

            return {

                ...state,
                products: newProduct

            };
        
        }

        case '@cart/CLEAR-CART': {

            return {

                ...state,
                products: []

            };

        }

        default:

            return state;

    }

}

export default cart;