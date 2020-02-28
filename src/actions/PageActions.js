export const GET_PHOTOS_REQUEST = "GET_PHOTOS_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";

  export function getPhotos(year){
      return dispatch => {
          dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year
          })
          setTimeout(() => {
            dispatch({
              type: REQUEST_SUCCESS,
              payload: [1, 2, 3, 4, 10]
           })
        }, 1000);
      }


  }