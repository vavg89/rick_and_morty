import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Cards from './components/cards/Cards.jsx'
import { ImgStyle } from './components/title/titleStyle'
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react'
import About from './components/about/About.jsx'
import Mydetail from './components/myDetail/MyDetail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/favorites/Favorites'
import axios from "axios"



function App () {
  const location = useLocation()
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([])  
  const [access, setAccess] = useState(false)  

  
  useEffect(() => {
    !access && navigate('/');
    
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [access]);
 

 function login(userData) {
  const { email, password } = userData;
  console.log(email);
  const URL = 'http://localhost:3001/rickandmorty/login/';
  axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
     const { access } = data;
     setAccess(data);
     access && navigate('/home');
  });
}


  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
      };
const onClose = (id)=>{
setCharacters(characters.filter(char => char.id !== id))
}
  return (
    <div className='App' style={{ padding: '25px' }}>

      
      <div>
        <ImgStyle src='https://i.imgur.com/3Q0XVRV.gif'/>
      </div>

     

      <stylesOns>
        {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      </stylesOns>

     <Routes>
      <Route path='/' element={<Form login={login}/>}/>
      <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/favorites' element={<Favorites/>} />
      <Route path='/myDetail/:myDetailId' element={<Mydetail/>} />
        
     </Routes>    
    </div>
  )
}

export default App
