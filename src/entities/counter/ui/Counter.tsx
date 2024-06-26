import { useGetCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const counterValue = useGetCounterValue();
    const { decrement, increment } = useCounterActions();

    const handleDecrement = () => {
        decrement();
    };
    const handleIncrement = () => {
        increment();
    };

    return (
        <div data-testid="counter">
            <h1 data-testid="counter-value">{counterValue}</h1>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
                type="button"
                data-testid="increment-btn"
                onClick={handleIncrement}
            >
                +
            </button>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
                type="button"
                data-testid="decrement-btn"
                onClick={handleDecrement}
            >
                -
            </button>
        </div>
    );
};
