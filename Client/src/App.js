/* eslint-disable react-hooks/exhaustive-deps */
import { ImgStyle } from './components/title/titleStyle'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import About from './components/about/About.jsx'
import Detail  from './components/Detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';


function App() {
   const { pathname } = useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)

   const EMAIL = 'c@l.com';
   const PASSWORD = 'p12345'

   function login({email, password}){
      if(email === EMAIL && password === PASSWORD){
         setAccess(true)
         navigate('/home')
      }
      else setAccess(true)
      navigate('/home')
   }

   useEffect(()=>{
      !access && navigate('/')
   },[access])


   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if(!characters.find(char => char.id === data.id)){
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         }else{
            alert(`Ya existe el personaje con el id ${id}`)
         }
      }).catch((err) => alert(err.response.data.error) )
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   } 
  return (
    <div className='App' style={{ padding: '25px' }}>

      
      <div>
        <ImgStyle src='https://i.imgur.com/3Q0XVRV.gif'/>
      </div>

     

      <stylesOns>
        {pathname !== '/' && <Nav onSearch={onSearch}/>}
      </stylesOns>

     <Routes>
      <Route path='/' element={<Form login={login}/>}/>
      <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/favorites' element={<Favorites/>} />
      <Route path='/Detail/:myDetailId' element={<Detail/>} />
        
     </Routes>    
    </div>
  )
}

export default App
