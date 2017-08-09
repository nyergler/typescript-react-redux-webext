import backgroundStore from '../stores';
import {incrementBackgroundCounter, decrementBackgroundCounter} from '../actions';

// increment or decrement background counter every second
setInterval(() => {
    backgroundStore.dispatch(Math.random() >= 0.5 ?
        incrementBackgroundCounter() :
        decrementBackgroundCounter()
    );
}, 1000);