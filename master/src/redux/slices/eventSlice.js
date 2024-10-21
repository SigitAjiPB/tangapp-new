
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events: [],
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


