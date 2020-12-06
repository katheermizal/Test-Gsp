import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import { count } from '../../actions';

const Controls = () => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(count.increment(1));
    };

    const handleDecrement = () => {
        dispatch(count.decrement(1));
    };
    
    return(
        <div>
            <Button onClick={handleIncrement}>Increment (+)</Button>
             <br/>
             <Button onClick={handleDecrement}>Decrement (-)</Button>
        </div>
    );
};

export default Controls;