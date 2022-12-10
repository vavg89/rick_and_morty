import { SearchStyles, BottonSearch }  from "./SearchBarStyles";
import { useState } from "react";



export default function SearchBar(props) {
   const {onSearch}=props
   const [character, setCharacters]=useState('')
   const handleChange = (evento)=> {
      setCharacters(evento.target.value)
   }
   return (
      <SearchStyles>
         <input type='search' value={character} onChange={handleChange}/>
        
      <BottonSearch onClick={()=> onSearch(character)}>Agregar</BottonSearch>
      </SearchStyles>
   );
}
