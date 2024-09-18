// import { createSlice } from "@reduxjs/toolkit";

// const billingSlice = createSlice({
//     name: "billing",
//     initialState: [],   
//     reducers: {
//         addEvent: (state, action ) => {
//             state.push(action.payload)
//         },

//         removeEvent: (state, action) => {
//             return state.filter(item => item.id !== action.payload.id)
//         }
//     }
// })

// export const {addEvent, removeEvent} = billingSlice.actions
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