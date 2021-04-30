// Step3: Setup Reducer for the store

// Step 8: 
import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS, GET_POST_BY_ID } from "../actions/types";

/*

What's a Reducer?
    It is a function that takes the current state and 
    an action that was dispatched as it’s parameters and returns the new state.

*/

// Setting up postReducer so that
// we can combine this reducer with other reducers later 
// and make a big object for the store 
// reducer should mandatorily return a state. 
const postReducer = (state = [], action) => {
  // Step 8.1 
  //now it is time to understand the concept called 'Actions'
  //What are Actions? 
    //Actions are plain Javascript objects with a type property. 
    //This type property describes the event that is taking place 
    //in the application.

  console.log('Inside Posts Reducer');

  switch(action.type) {
    case ADD_POST:
      let addPostState = [
        ...state,
        action.payload
      ];
      return addPostState; 
    case GET_POSTS:
      return action.payload; 
    case GET_POST_BY_ID: 
      return action.post;
    case EDIT_POST:
      return state; // not implemented yet
    case DELETE_POST:
        return state; // not implemented yet
    
    default:
      return state;
  }
}
export default postReducer;

