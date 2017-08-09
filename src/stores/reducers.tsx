import {combineReducers} from 'redux';
import {
    INCREMENT_BACKGROUND_COUNTER,
    DECREMENT_BACKGROUND_COUNTER,
    INCREMENT_UI_COUNTER,
    DECREMENT_UI_COUNTER
} from '../constants';
import { CounterAction } from '../actions';


function createCounterReducer(increment: string, decrement: string) {
    return function (state = 0, action: CounterAction) {
        const value = action.value || 1;
        switch (action.type) {
            case increment:
                return state + value;
            case decrement:
                return state - value;
            default:
                return state;
        }
    }
}

export default combineReducers({
    backgroundCounter: createCounterReducer(INCREMENT_BACKGROUND_COUNTER, DECREMENT_BACKGROUND_COUNTER),
    uiCounter: createCounterReducer(INCREMENT_UI_COUNTER, DECREMENT_UI_COUNTER)
});