import React from 'react'
import SearchBar from '../searchBar/SearchBar.jsx'
import  {Link} from 'react-router-dom'
import { LinkNav } from './NavStyles.jsx'



export default function Nav({onSearch}) {
    
    return (
        <LinkNav>
        <Link to={'/home'} >Home </Link>
        <Link to={'/favorites'} >Favoritos </Link>
        <Link to={'/about'}>About</Link>
        <SearchBar onSearch={onSearch}/>
        </LinkNav>
      
    )
 }  

