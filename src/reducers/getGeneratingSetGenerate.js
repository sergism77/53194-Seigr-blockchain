//this is the getGeneratingSetGenerate reducer

import { GET_GENERATING_SETGENERATE } from "../actions/types";

const initialState = {
    generatingSetGenerate: [],
    generatingSetGenerateLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GENERATING_SETGENERATE:
            return {
                ...state,
                generatingSetGenerate: action.payload,
                generatingSetGenerateLoading: true,
            };

        default:
            return state;
    }
}
