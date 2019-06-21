import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const fetchSmurf = () => (dispatch) => {
  dispatch({
    type: FETCH_SMURF_START
  })
  axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log('fetch smurfs success: ', response);
      dispatch({
        type: FETCH_SMURF_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('fetch smurfs error: ', error);
      dispatch({
        type: FETCH_SMURF_FAILURE,
        payload: 'Error fetching smurfs'
      })
    })
}

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const addSmurf = (input) => (dispatch) => {
  dispatch({
    type: ADD_SMURF_START
  })
  axios.post('http://localhost:3333/smurfs', input)
    .then(response => {
      console.log('add smurfs success: ', response);
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('fetch smurfs error: ', error);
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: 'Error adding smurfs'
      })
    })
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
