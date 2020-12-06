import React from 'react';
import { useSelector } from 'react-redux';
import Text from '../Text';


const Count = () => {
    const Count = useSelector(state => state.count);
    return(
        <Text>Count From Global State: {Count}</Text>
    );
};

export default Count;