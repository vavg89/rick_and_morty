
export function addFavorites(id){
    return {
        type: 'ADD_FAVORITES',
        payload: id,
    }
}

export function deleteFavorites(id){
    return {
        type: 'DELETE_FAVORITES',
        payload: id,
    }
}

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
