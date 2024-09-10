// import {configureStore, creatAction, creatReducer} from "@reduxjs/toolkit"
// import toolkit from "@reduxjs/toolkit"
// const {configureStore, createAction, createReducer} = toolkit

import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';


const addToCart = createAction('ADD_TO_CART')
const initialState = {
    cart: []
}
const cartReducer = createReducer([], (builder) =>{
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload)
    })
})

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})
console.log('oncreat store: ', store.getState());

store.subscribe(() => {
    console.log("Store Change: ", store.getState());
    
})

store.dispatch(addToCart({id: 2, qty: 20}))


