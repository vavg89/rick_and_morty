import axios from "axios";

export const addFavorites = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAVORITES',
             payload: data,
          });
       });
    };
 };


export const deleteFavorites = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'DELETE_FAVORITES',
             payload: data,
       });
       });
    };
 };
 

export function filterCards(gender){
    return {
        type: 'FILTER',
        payload: gender,
    }
}

export function orderCards(id){
    return {
        type: 'ORDER',
        payload: id,
    }
}
