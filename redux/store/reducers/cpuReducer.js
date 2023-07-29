// store/reducers/cpuReducer.js
const initialState = {
    selectedComponent: null,
};

const cpuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_CPU':
            return {
                ...state,
                selectedComponent: action.payload,
            };
        default:
            return state;
    }
};

export default cpuReducer;
