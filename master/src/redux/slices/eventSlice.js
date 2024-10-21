
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     events: [],
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

const initialState = {
  eventData: {
    eventName: '',
    totalCost: '',
    participants: '',
    date: '',
    eventOrganizer: '',
    description: '',
  },
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEventData: (state, action) => {
      state.eventData = action.payload;
      localStorage.setItem('eventData', JSON.stringify(state.eventData) || []);
    },
  },
});

export const { setEventData } = eventSlice.actions;
export default eventSlice.reducer;

