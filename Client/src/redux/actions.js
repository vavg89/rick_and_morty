import axios from "axios";

/*export const addFav = (character) => {
   return {
       type: "ADD_FAV",
       payload: character
   }
   }
   */
  /* export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAV',
             payload: data,
          });
       });
    };
 };
 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
 };*/
 const URL = "http://localhost:3001/rickandmorty/";
 
 export const addFav = (character) => {
   return async (dispatch) => {
     try {
       const { data } = await axios.post(`${URL}/fav`, character);
 
       console.log(data);
 
       return dispatch({
         type: 'ADD_FAV',
         payload: data,
       });
     } catch (error) {
       console.error(error);
     }
   };
 };
 
 export const removeFav = (id) => {
   return async function (dispatch) {
     try {
       const { data } = await axios.delete(`${URL}/fav/${id}`);
 
       console.log(data);
       return dispatch({
         type: 'REMOVE_FAV',
         payload: data,
       });
     } catch (error) {
       console.log(error);
     }
   };
 };
   export function filterCards (gender){
       return {
           type: "FILTER",
           payload: gender
       }
   }
   
   export function orderCards (order){
       return {
           type: "ORDER",
           payload: order
       }
   }