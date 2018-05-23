import axios from 'axios';
import {FETCH_USER, FETCH_RECIPES, DELETE_RECIPE} from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
};

export const submitRecipe = (values, history) => async dispatch => {
    const res = await axios.post('/api/recipes', values);
    history.push('/dashboard');
    dispatch({type: FETCH_USER, payload: res.data});
};

export const fetchRecipes = () => async dispatch => {
    const res = await axios.get('/api/recipes');
    dispatch({type: FETCH_RECIPES, payload: res.data});
};

export const deleteRecipe = (id, history) => async dispatch => {
    const res = await axios.delete(`/api/recipes/delete/${id}`, id);
    history.push('/dashboard');
    dispatch({type: DELETE_RECIPE, payload: res.data});
};

