// action: an arrow function that returns an object
// object contains a type of action, payload (option)

export const increaseCounter = () => {
    return {
        type: "INCREASE_COUNTER",
    };
};