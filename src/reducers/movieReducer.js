import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    SET_PAGE,
} from '../actions/movieActions';

const initialState = {
    loading: false,
    movies: [],
    error: '',
    currentPage: 1,
    totalPages: 0,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            return { ...state, loading: true };
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload.results,
                totalPages: action.payload.total_pages,
            };
        case FETCH_MOVIES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case SET_PAGE:
            return { ...state, currentPage: action.payload };
        default:
            return state;
    }
};

export default movieReducer;
