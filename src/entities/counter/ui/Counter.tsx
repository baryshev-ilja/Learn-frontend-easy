import { useDispatch } from 'react-redux';

import { useGetCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useGetCounterValue();

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    const increment = () => {
        dispatch(counterActions.increment());
    };

    return (
        <div data-testid="counter">
            <h1 data-testid="counter-value">{counterValue}</h1>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
                type="button"
                data-testid="increment-btn"
                onClick={increment}
            >
                +
            </button>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
                type="button"
                data-testid="decrement-btn"
                onClick={decrement}
            >
                -
            </button>
        </div>
    );
};
