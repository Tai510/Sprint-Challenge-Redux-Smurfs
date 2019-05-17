/*
  Be sure to import in all of the action types from `../actions`
*/
import {SMURFS_START,SMURFS_SUCCESS,SMURFS_FAILURE,ADD_SMURFS_START,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAILURE} from '../actions'
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  error : null,
  fetchingSmurfs: false,
  addingSmurf: false,
  smurfs: []
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SMURFS_START:
    return {
      ...state,
      error: null,
      fetchingSmurfs: true
    }
    case SMURFS_SUCCESS:
    return {
      ...state,
      error: null,
      fetchingSmurfs: false,
      smurfs: action.payload,
    }
    case SMURFS_FAILURE:
    return {
      ...state,
      error: action.payload,
      fetchingSmurfs: false,
    }
    case ADD_SMURFS_START:
      return {
        ...state,
       addingSmurf: true
      }
    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
    case ADD_SMURFS_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }  

    default: return {...state}
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
