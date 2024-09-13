import { createSlice } from "@reduxjs/toolkit";

const billingSlice = createSlice({
    name: "billing",
    initialState: [],   
    reducers: {
        addEvent: (state, action ) => {
            state.push(action.payload)
        },

        removeEvent: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        }
    }
})

export const {addEvent, removeEvent} = billingSlice.actions