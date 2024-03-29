/* eslint-disable react-hooks/exhaustive-deps */
import { ImgStyle } from './components/title/titleStyle'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/about/About.jsx'
import Detail  from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/favorites/Favorites';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
   const { pathname } = useLocation()
   const navigate = useNavigate()
   
   let [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)


   const URL = 'http://localhost:3001/rickandmorty/'

   async function login({email, password}){
     try {
      const { data } =  await axios(`${URL}/login?email=${email}&password=${password}`)

      const { access } = data

      setAccess(access)
      access && navigate('/home')

     } catch ({response}) {
         const { data } = response
         
         alert(data.message)
     }
   }

   useEffect(()=>{
      !access && navigate('/')
   },[access])


   async function onSearch(id) {
      // eslint-disable-next-line
      if(characters.find(char => char.id == id )){
         alert(`Ya existe el personaje con el id ${id}`)
         return
      }
    try {
      const { data } =  await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      // console.log(data);
      setCharacters( oldChars => [ ...oldChars, data ] )

    } catch (error) {
      // console.log(error);
      alert(error.response.data)
    }
   }

   const onClose = (id) => {
      
    const filtered = characters.filter((chars) => chars.id !== id);
    setCharacters(filtered)
   } 
  return (
    <div className='App' style={{ padding: '25px' }}>

      
      <div>
        <ImgStyle src='https://i.imgur.com/3Q0XVRV.gif'/>
      </div>
      <RegistrationForm/>
     

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
