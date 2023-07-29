// store/reducers.js
import { combineReducers } from 'redux';
import cpuReducer from './reducers/cpuReducer';
import ramReducer from './reducers/ramReducer';
import motherboardReducer from './reducers/motherboardReducer';
// Import other reducers for remaining categories

const rootReducer = combineReducers({
    cpu: cpuReducer,
    ram: ramReducer,
    motherboard: motherboardReducer,
    // Add other reducers for remaining categories
});

export default rootReducer;
