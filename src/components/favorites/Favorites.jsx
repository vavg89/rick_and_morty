import { connect, useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../redux/actions.js";
import Card from "../card/Card.jsx";
import { DivCards, } from '../cards/cardsSryles';


function Favorites({myFavorites, onClose}) {

    const dispatch= useDispatch();

    function handleOrder(e){
        dispatch(orderCards(e.target.value))
    }


    function handleFilter(e){
        dispatch(filterCards(e.target.value))
    }

    return(

        

        <div>
            <div>
                <select name='order' onChange={handleOrder}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="filter" onChange={handleFilter}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>GenderLess</option>
                    <option value='Unknown'>Unknown</option>
                </select>
            </div>

            <br/>

          <DivCards>
          {
        myFavorites?.map(char=>(
           <Card 
           
           key={char.name}
           id={char.id}
           name={char.name}
           species={char.species}
           gender={char.gender}
           image={char.image}
           onClose={()=> onClose(char.id)}
         />
        ))}
          </DivCards>
        
        
      </div>
    );
}
function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps)(Favorites)