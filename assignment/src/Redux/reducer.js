import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes";

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case GET_DATA_SUCCESS:
            return {
                ...state,
                data: payload,
                initialState: false,
                isError: false,
            }

        case GET_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        default:
            return state;
    }
}
