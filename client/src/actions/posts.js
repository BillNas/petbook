import {FETCH_ALL,CREATE,DELETE} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const createPet = (post) => async(dispatch) => {
    try {
      const { data } = await api.createPet(post);
      dispatch({type: CREATE, payload: data});
    }
    catch(error){
      console.log(error.message)
    }
  }
  export const deletePet = (id) => async (dispatch) => {
    try { 
      await api.deletePet(id);
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
    this.getPosts();
  };