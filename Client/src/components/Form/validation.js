const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const regexPassword= /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export function validation(userData){
    let errors ={}

    if(!regexEmail.test(userData.username)) errors.username= 'Debe ingresar un email...'
    else if(!userData.username) errors.username='El campo no puede estar vacio'
    else if(userData.username.length > 35) errors.username='El nombre de usuario no puede ser mayor de 35 caracteres'

    if(!regexPassword.test(userData.password)) errors.password='La contraseña debe tener al menos un numero'
    else if(userData.password.length < 6 && userData.password.length > 10 ) errors.password='La contraseña debe tener entre 6 y 10 caracteres'
    return errors;
}