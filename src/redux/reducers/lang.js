import { SELECT_LANGUAGE } from "../actions/actionTypes";
const langList = require('./../../fixtures/langData.json');

const defaultLang = langList.find(currentLang => currentLang.id === 'en');

const initialState = defaultLang;

export const langReducer = (state = initialState, { type, payload }) => {
    if (type === SELECT_LANGUAGE) {
        const currentLang = langList.find(lang => lang.id === payload)
        return {
            ...state,
            ...currentLang
        }
    }
    return state;
};
