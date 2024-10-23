
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events: JSON.parse(localStorage.getItem('event')) || [], //pokonya initu check dulu kalo ada data di localstoragenya saat di render pertamakali, pake data nya. Biar ngga di replace sama data baru yang akan di masukan 
}

const eventSlice = createSlice({
    name: 'event',
    initialState, 
    reducers: {
        addEvent: (state, action ) => {
            state.events.push(action.payload)
            localStorage.setItem('event', JSON.stringify(state.events) || [])
        }
    }
})

export const {addEvent} = eventSlice.actions
export default eventSlice.reducer


