import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Cards from './components/cards/Cards.jsx'
import { ImgStyle } from './components/title/titleStyle'
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react'
import About from './components/about/About.jsx'
import Mydetail from './components/myDetail/MyDetail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/favorites/Favorites'




function App () {
  const location = useLocation()
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([])  
  const [access, setAccess] = useState(false)  
  const username= 'Correo@gmail.com'
  const password='Paaaaa01'
  
  useEffect(() => {
    !access && navigate('/');
    
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [access]);
 

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
    else {
      alert('Usuario o contraseña incorrecto')
    }
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
