import { CHANGE_VALUE, CHANGE_VIEW } from '../actionTypes';

export const changeValue = (data) => ({
    type: CHANGE_VALUE,
    payload: data
});

export const changeView = (data) => ({
    type: CHANGE_VIEW,
    payload: data
});
