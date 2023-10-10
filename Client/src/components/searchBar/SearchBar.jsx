import { SearchStyles, BottonSearch } from "./SearchBarStyles";
import { useState } from "react";

export default function SearchBar(props) {
  const { onSearch } = props;
  const [id, setId] = useState("");

  function handleChange(event) {
    setId(event.target.value);
  }

  return (
    <SearchStyles>
      <input type="search" value={id} onChange={handleChange} placeholder="Número del 1 al 826" />

      <BottonSearch onClick={() => onSearch(id)}>Agregar</BottonSearch>
    </SearchStyles>
  );
}
