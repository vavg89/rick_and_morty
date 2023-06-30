
import { useState } from "react";
import { validation } from "./validation";
import { DivForm, Labelstyles, PStyles } from "./FormStyless";

export default function Form({ login }) {
    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({})

    function handleChange(event){
        setErrors(validation({...userData, [event.target.name]:event.target.value}))
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        login(userData)
    }
  return <DivForm>
            <form onSubmit={handleSubmit}>
                <Labelstyles htmlFor="email">
                    Email:
                    <input 
                        type="text" 
                        id="email"
                        value={userData.email}
                        name="email"
                        onChange={handleChange}/>
                </Labelstyles>
                <PStyles>{errors.email}</PStyles> 
                <Labelstyles htmlFor="password">
                    Password:
                    <input 
                        type="password" id="password"
                        value={userData.password}
                        name="password" 
                        onChange={handleChange}/>
                </Labelstyles>
                <PStyles>{errors.password}</PStyles>
                <button>Submit</button>
            </form>
        </DivForm>;
}
