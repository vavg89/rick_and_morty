
const initialState = {

    myFavorites: [],
    allCharacters:[],
}

export default function reducer(state = initialState,action){

    switch (action.type) {
        case 'ADD_FAVORITES'://en case de que sea favorito
            
            return  {
                ...state,
                allCharacters:[...action.payload],
                myFavorites: [...action.payload]//a lo que tengamos en favoritos le agregamos payload(id)
            };

        case 'DELETE_FAVORITES'://en case de que querramos borrar favoritos
           
            return  {
                ...state,
                myFavorites: [...action.payload]// actualizamos los favoritos 
            };
        case 'FILTER':
            
            const filteredCharacters = state.allCharacters.filter(
                char => char.gender === action.payload
            );
            return{
                ...state,
                myFavorites: filteredCharacters,
            };

        case 'ORDER':
            const sortedCharacters= state.allCharacters.sort((a,b)=>{
                if (action.payload==='Ascendente'){
                    if(a.id<b.id)return -1
                    if(b.id<a.id)return 1
                    return 0;
                }

                else{
                    if(a.id<b.id)return 1
                    if(b.id<a.id)return -1
                    return 0
                }

            })
            
        
            return{
                ...state,
                myFavorites: [...sortedCharacters],
            }

        default:
            return {...state};//por default tenemos que retornar nuestro estado
    }
    
}