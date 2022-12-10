import React from "react"
import { validation } from "./validation";
import { DivForm, Labelstyles, PStyles } from "./FormStyless";


export default function Form (props) {
    const [userData, setUserData] = React.useState({ 
        username: '',
        password: '',
    });

    const [errors, setErrors] = React.useState({ 
        username: '',
        password: '',
    });


    function handleInputChange(e){
        setUserData({...userData,[e.target.name]:e.target.value})

        setErrors(validation({...userData,[e.target.name]: e.target.value }));
    }
    
    const handleSubmit=(e)=>{
       e.preventDefault()   
       props.login(userData)



    }
    return (
        <DivForm>
      <form  onSubmit={handleSubmit}>
        <Labelstyles htmlFor="username">Usuario:</Labelstyles>
            <input
            id='username'
            name='username'
            placeholder="Ingrese su usuario..."
            type='text'
            value={userData.username}
            onChange={handleInputChange}
            />  
            <PStyles>{errors.username}</PStyles> 
        <br/>
        <Labelstyles htmlFor="password">Contraseña:</Labelstyles>
            <input
              id='password'
              name='password'
              placeholder="Ingrese su contraseña..."
              type='password'
              value={userData.password}
              onChange={handleInputChange}
            />
            <PStyles>{errors.password}</PStyles>
            <input type='submit'/>
            </form>
    </DivForm>
    );
}