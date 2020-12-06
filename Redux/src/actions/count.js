export const increment = (value) => {
    return ({
        type: 'COUNT_INCREMENT',
        value
    });
};

export const decrement = (value) => {
    return ({
        type: 'COUNT_DECREMENT',
        value
    });
};