import { SearchStyles, BottonSearch }  from "./SearchBarStyles";
import { useState } from "react";



export default function SearchBar(props) {
   const {onSearch}=props
   const [id, setId]=useState('')
   function handleChange(event){
      // console.log(event.target.value);
      setId(event.target.value)
   }
   return (
      <SearchStyles>
         <input type='search' value={id} onChange={handleChange}/>
        
      <BottonSearch onClick={()=> onSearch(id)}>Agregar</BottonSearch>
      </SearchStyles>
   );
}
