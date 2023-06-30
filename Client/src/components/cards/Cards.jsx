import Card from '../card/Card.jsx';
import { DivCards} from './cardsSryles.jsx';



export default function Cards({characters, onClose}) {

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
               onClose={onClose}
            />
            ))}
            
          </DivCards>
   )
}
