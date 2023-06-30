//import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {DivDetail} from "./detailStyles"

export default function Detail() {
    const {myDetailId}= useParams()
    const [character, setCharacter] =useState({})
  
    useEffect(() => {
      fetch(`http://localhost:3001/rickandmorty/character/${myDetailId}`)
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         })
         .catch((err) => {
            window.alert('No hay personajes con ese ID');
         });
      return setCharacter({});
   }, [myDetailId]);
    
      return (
               <DivDetail>{character ? 
                <div>
                  <h1>{character.name}</h1>
                  <h5>{character.status} </h5>
                  <h5>{character.specie} </h5>
                  <h5>{character.gender} </h5>
                  <h5>ID:{character.id} </h5>
                  <h5>{character.origin?.name} </h5>
                  <img src={character.image} alt={character.name} />
                </div> : ''
                }
                            
             </DivDetail>
      )
  }