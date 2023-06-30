import { connect, useDispatch } from "react-redux"
import Cards from "../cards/Cards"
import { filterCards, orderCards } from "../../redux/actions"

function Favorites({ myFavorites }) {
    const dispatch = useDispatch();
  
    const handleOrder = function(evento){
      dispatch(orderCards(evento.target.value))
    }
  
    const handleFilter = (evento) => {
      dispatch(filterCards(evento.target.value))
    }

    return (
        <div>
            <div>
                <select name="order" onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select name="filter" onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
        <div>

            <Cards characters={myFavorites}/>
        </div>
        </div>
    )
}

export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)