const initialState = 0;

const countReducer = (state = initialState, action) => {
    switch(action.type){
        case 'COUNT_INCREMENT':
            return state + action.value;
        case 'COUNT_DECREMENT':
            return state - action.value;
        default:
            return state;    
    }
};

export default countReducer;