// we need to axios 
// What's the REST API URL?  http://jsonplaceholder.typicode.com/posts
// What's the http method? POST, GET, PUT, DELETE
// What's the data we will send to the api? we need to get it from PostForm comp 
// upon what what Action? ADD_POST, GET_POSTS, GET_POST_BY_ID, UPDATE_POST 

import axios from 'axios';
import { ADD_POST, GET_POSTS, GET_POST_BY_ID } from "../actions/types";
const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const createPost = (data) => {
  return (dispatch) => {
    // AJAX call to add a post
    return axios.post(POSTS_API_URL, data )
      .then(response => {
         // TODO: Learn about integrating toastr // npm i react-redux-toastr 
          // toastr.success('Success', 'Post has been created!');
          alert('Post has been created!');
          dispatch({
            type: ADD_POST,
            payload: {
              id: response.data.id,
              title: response.data.title,
              body: response.data.body
            }
          });
      })
      .catch(error => {
          throw (error);
      })
      .finally( () => {
        
      }) 
  };
};

export const getAllPosts = () => {
  return (dispatch) => {
    // AJAX call to get all posts
    return axios.get(POSTS_API_URL )
      .then(response => {
          dispatch({
            type: GET_POSTS,
            payload: response.data
          });
      })
      .catch(error => {
          throw (error);
      })
      .finally( () => {
        
      }) 
  };
}

//Initial Load to get post by id
export const getPostById = (postId) => {
  return (dispatch) => {
    return axios.get(POSTS_API_URL+'/'+postId)
      .then(response => {
        //without util method, you can try like the following
        // this will hit the postReducer
        dispatch({
          type: GET_POST_BY_ID,
          post: response.data
        })
      })
      .catch(error => {
        throw(error);
      });
  };
};



