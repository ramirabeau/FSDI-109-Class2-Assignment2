// reducer: smple function that receives the state aand action
// should return a new state

const cartCounterReducer = (state = 0, action) => {
    if (action.type === "INCREASE_COUNTER") {
        return state + 1; // increase the counter
        /*} else{
            if(action.type === "DECREASE_COUNTER") {
                return state - 1; //decrease the counter
            }*/
    }
    return state;
};

export default cartCounterReducer;