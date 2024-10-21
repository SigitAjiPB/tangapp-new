// reducers.js
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
  
  const inputReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EVENT_DATA':
        return {
          ...state,
          eventData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default inputReducer;
  