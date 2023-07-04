import { DivCard } from './cardStyles';
import { ImgCard } from './cardStyles';
import { Botton, BottonF } from './cardStyles';
import  {Link}  from 'react-router-dom'
import { useEffect } from 'react';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState} from 'react';


function Card({
   id,
   name,
   species,
   status,
   gender,
   origin,
   image,
   onClose,
   addFav, removeFav,myFavorites
 }) {
   
   const [isFav, setIsfav] = useState(false)
  
   useEffect(() => {
      myFavorites.forEach((charFav) => {
         if (charFav.id === id) {
            setIsfav(true);
         }
      });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myFavorites]);
   
     function handleFavorite() {
       if (isFav) {
         setIsfav(false);
         removeFav(id);
       } else {
         setIsfav(true);
         addFav({ id, name, status, species, gender, origin, image });
       }
     }
   return (
      <DivCard>
         
         <Link to={`/Detail/${id}`}><h2>{name}</h2></Link>
         
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <ImgCard  src={image} alt={name} />
         
         { isFav ? (
            <BottonF onClick={handleFavorite}>❤️</BottonF>
               ) : (
            <BottonF onClick={handleFavorite}>🤍</BottonF>
            )
         }

         

         <Botton onClick={() => onClose(id)}>onClose</Botton>
      </DivCard>
   );
}
   
function mapDispatchToProps(dispatch) {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
       }, 
     
       removeFav: (id) => {
         dispatch(removeFav(id))
       }
   }
}


function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card); //conectar el dispacht con el componente 