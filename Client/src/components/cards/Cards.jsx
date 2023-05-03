import Card from '../card/Card.jsx';
import { DivCards} from './cardsSryles.jsx';



export default function Cards(props) {
   const {characters, onClose} = props;
   return (
            <DivCards>
            {
            characters.map((char)=>(
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
   )
}
