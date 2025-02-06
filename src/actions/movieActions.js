import axios from 'axios';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const SET_PAGE = 'SET_PAGE';

const API_KEY = '1fc61e0573c88ba570cba8696d1c458c';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

export const fetchMovies = (query, page = 1) => async dispatch => {
    dispatch({ type: FETCH_MOVIES_REQUEST });

    try {
        const response = await axios.get(BASE_URL, {
            params: {
                api_key: API_KEY,
                query,
                page,
            },
        });

        dispatch({
            type: FETCH_MOVIES_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_MOVIES_FAILURE,
            payload: error.message,
        });
    }
};

export const setPage = page => ({
    type: SET_PAGE,
    payload: page,
});
