import { DivCard } from './cardStyles';
import { ImgCard } from './cardStyles';
import { Botton, BottonF } from './cardStyles';
import  {Link}  from 'react-router-dom'
import { useEffect } from 'react';
import { addFavorites, deleteFavorites } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState} from 'react';


export function Card(props) {
   
   const [isFav, setIsfav] = useState(false)
  
   useEffect(() => {
      props.myFavorites.forEach(fav => {
         if (fav.id === props.id) {
            setIsfav(true);
         }
      });
    
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.myFavorites]);

   function handleFavorite() {
      if (isFav){
         setIsfav(false)
         props.deleteFavorites(props.id)
      } else{
         setIsfav(true)
         props.addFavorites(props)
      }
   }
      
   return (
      <DivCard>
         
         <Link to={`/myDetail/${props.id}`}><h2>{props.name}</h2></Link>
         
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <ImgCard  src={props.image} alt={props.name} />
         
         { isFav ? (
            <BottonF onClick={handleFavorite}>❤️</BottonF>
               ) : (
            <BottonF onClick={handleFavorite}>🤍</BottonF>
            )
         }

         

         <Botton onClick={props.onClose}>Close</Botton>
      </DivCard>
   );
}
   
function mapDispatchToProps(dispatch) {
   return {
      addFavorites: personaje => dispatch(addFavorites(personaje)),
     
      deleteFavorites: id => dispatch(deleteFavorites(id)),
      }
   }


function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card); //conectar el dispacht con el componente 