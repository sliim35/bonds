import { CHANGE_VIEW, CHANGE_VALUE } from '../actions/actionTypes';
import { WEEK, PRICE } from '../../utils/constants';

const initialState = {
    view: {
        id: 1,
        value: WEEK
    },
    value: PRICE
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VIEW:
            return {
                ...state,
                view: action.payload
            };

        case CHANGE_VALUE:
            return {
                ...state,
                value: action.payload
            };

        default:
            return state;
    }
};
