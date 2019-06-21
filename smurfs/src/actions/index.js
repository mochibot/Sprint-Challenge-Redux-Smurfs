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
      console.log('add smurf success: ', response);
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('add smurf error: ', error);
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: 'Error adding smurf'
      })
    })
}

export const EDIT_SMURF_START = 'EDIT_SMURF_START';
export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS'
export const EDIT_SMURF_FAILURE = 'EDIT_SMURF_FAILURE';

export const editSmurf = (smurf) => (dispatch) => {
  dispatch({
    type: EDIT_SMURF_START
  })
  axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(response => {
      console.log('edit smurf success: ', response)
      dispatch({
        type: EDIT_SMURF_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('edit smurf failure: ', error)
      dispatch({
        type: EDIT_SMURF_FAILURE,
        payload: 'Error editing smurf'
      })
    })
}

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

export const deleteSmurf = (id) => (dispatch) => {
  dispatch({
    type: DELETE_SMURF_START
  })
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log('delete smurf success: ', response)
      dispatch({
        type: DELETE_SMURF_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('delete smurf failure: ', error)
      dispatch({
        type: DELETE_SMURF_FAILURE,
        payload: 'Error deleting smurf'
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
