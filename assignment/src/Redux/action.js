import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes";
import axios from "axios";

export const getData = () => (dispatch) => {
    dispatch({ type: GET_DATA_REQUEST });
    return axios
        .get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
        .then((r) => dispatch({ type: GET_DATA_SUCCESS, payload: r.data }))
        .catch((e) => dispatch({ type: GET_DATA_FAILURE }))
}