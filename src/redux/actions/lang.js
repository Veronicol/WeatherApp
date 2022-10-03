import { SELECT_LANGUAGE } from "./actionTypes";

export const selectLanguage = (language) =>  {
    return {
        type: SELECT_LANGUAGE,
        payload: language
    };
}
