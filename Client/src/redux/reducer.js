const initialState = {
    myFavorites: [],
    allCharacters: [],
    users: [],
}

export default function reducer(state=initialState, {type, payload , action}){
    // console.log(action) -> {type: , payload: }
    switch (type) {
        case 'ADD_FAV':
            return { ...state, myFavorites: payload, allCharacters: payload };
            case 'REMOVE_FAV':
                return { ...state, myFavorites: payload };

        case "FILTER":
            const filterByGender = state.allCharacters.filter((char)=>char.gender === payload)
            return {
                ...state,
                myFavorites: filterByGender
            }
            /* case "ORDER":
            const orderById = [...state.allCharacters]
            return {
                ...state,
                myFavorites:
                    payload === 'A'
                        ? orderById.sort((a, b) => a.id - b.id)
                        : orderById.sort((a, b) => b.id - a.id),
            } */

            case "ORDER":
            return {
            ...state,
            myFavorites: state.allCharacters.sort((a, b) => 
            payload === "A" ? a.id - b.id : b.id - a.id
            )
            }

            case 'CREATE_USER':
            return {
            ...state,
             users: [...state.users, action.payload],
      };
    
        default:
            return state
    }
}