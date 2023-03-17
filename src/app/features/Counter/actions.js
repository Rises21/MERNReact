import * as counter from "./constants";

export const increment = (value) => {
    return {
        type: counter.INCREMENT,
        value: value
    }
}

export const decrement = (value) => {
    return {
        type: counter.DECREMENT,
        value: value
    }
}

export const decrementWithCheckingAction = (value) => {
    return (dispatch, getState) => {
        if (getState().counter.count > 0) {
            dispatch(decrement(value))
        }
    }
}
