import {GET_PHOTOS_REQUEST, REQUEST_SUCCESS} from '../actions/PageActions';

export const initialState = {
    year: 2020,
    photos: [],
    isFetching: false
};

export function pageReducer(state = initialState, action){
    switch (action.type){
        case GET_PHOTOS_REQUEST:
            return {...state, year: action.payload, isFetching: true}

        case REQUEST_SUCCESS:
            return {...state, photos: action.payload, isFetching: false}
        
            default:
                return state;
    }
}