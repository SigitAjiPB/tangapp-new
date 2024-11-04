
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     events: JSON.parse(localStorage.getItem('event')) || [], //pokonya initu check dulu kalo ada data di localstoragenya saat di render pertamakali, pake data nya. Biar ngga di replace sama data baru yang akan di masukan 
// }

// const eventSlice = createSlice({
//     name: 'event',
//     initialState, 
//     reducers: {
//         addEvent: (state, action ) => {
//             state.events.push(action.payload)
//             localStorage.setItem('event', JSON.stringify(state.events) || [])
//         }
//     }
// })

// export const {addEvent} = eventSlice.actions
// export default eventSlice.reducer


import { createSlice } from '@reduxjs/toolkit'; 

const saveToLocalStorage = (key, value) => { localStorage.setItem(key, JSON.stringify(value)); }; 
const getFromLocalStorage = (key) => { const value = localStorage.getItem(key); return value ? JSON.parse(value) : []; };

const initialState = getFromLocalStorage('event') || [];
const eventSlice = createSlice({ name: 'event', initialState, reducers: { addEvent: (state, action) => { 
    const newState = [...state, action.payload]; 
    saveToLocalStorage('event', newState); 
    return newState; 
}}}); 


export const { addEvent } = eventSlice.actions; export default eventSlice.reducer;