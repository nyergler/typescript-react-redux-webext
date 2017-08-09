import {
    INCREMENT_BACKGROUND_COUNTER,
    DECREMENT_BACKGROUND_COUNTER,
    INCREMENT_UI_COUNTER,
    DECREMENT_UI_COUNTER
} from '../constants';

export interface CounterAction {
    type: string,
    value?: number,
};

export function incrementBackgroundCounter() {
    return {type: INCREMENT_BACKGROUND_COUNTER};
}

export function decrementBackgroundCounter() {
    return {type: DECREMENT_BACKGROUND_COUNTER};
}

export function incrementUICounter({value}:{value: number}) {
    return {
        type: INCREMENT_UI_COUNTER,
        value
    };
}

export function decrementUICounter({value}:{value: number}) {
    return {
        type: DECREMENT_UI_COUNTER,
        value
    };
}
