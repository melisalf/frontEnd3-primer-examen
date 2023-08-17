import { useState } from 'react'
import Card from './Card'

const Form = () => {
    
    const [pelicula, setPelicula] = useState({
        nombre: '',
        director: ''
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const validateNombre = (nombre) => {
        const trimStart = nombre.trimStart();
        if (trimStart.length > 3) {
            return true;
        } else {
            return false;
        }
    };

    const validateDirector = (director) => {
        if(director.length > 4){
            return true;
        }else {
            return false;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        const validateNombreTrue = validateNombre(pelicula.nombre);
        const validateDirectorTrue = validateDirector(pelicula.director);

        if (!validateNombreTrue || !validateDirectorTrue) {
            setShow(false)
            setError(true)
        } else {
            setError(false)
            setShow(true)
        }
    };
    
    return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Nombre pelicula: </label>
        <input type="text" placeholder='Nombre de su pelicula favorita' onChange={(event) => setPelicula({...pelicula, nombre: event.target.value})}/>
        <label>Director pelicula: </label>
        <input type="text" placeholder='Ingrese el nombre del director' onChange={(event) => setPelicula({...pelicula, director: event.target.value})}/>
        <button type='submit'>Enviar datos</button>  
    </form>
    
    {show && ( <Card pelicula= {pelicula}/>)}
    {error && <h4 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h4>}
    </>
    )
}

export default Form