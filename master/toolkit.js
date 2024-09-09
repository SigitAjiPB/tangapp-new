import {configureStore, creatAction, creatReducer} from "@reduxjs/toolkit"
// const {configureStore,creatAction, creatReducer} = toolkit


const addToCart = creatAction('ADD_TO_CART')
const initialState = {
    cart: []
}
const cartReducer = creatReducer([], (builder) =>{
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload)
    })
})

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

store.subscribe(() => {
    console.log("Store Change: ", store.getState());
    
})

store.dispatch(addToCart({id: 2, qty: 20}))


