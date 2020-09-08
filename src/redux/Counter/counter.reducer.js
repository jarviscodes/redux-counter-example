import {INCREMENT_COUNTER} from "./counter.types";


const INITIAL_STATE = {
    counter: 0
}

function reducer(state=INITIAL_STATE, action) {
    switch(action.type){
        case INCREMENT_COUNTER:
            const counter = state.counter;
            const new_counter = counter + 1;
            return {
                ...state,                   // Spread the current state
                counter: new_counter        // Replace the counter value.
            }
        default:
            return state                    // Not for this reducer, so leave the state as is.
    }
}

export default reducer;