import { useState } from 'react';

// El componente Buscador recibe la función setBusqueda por (props)
const Buscador = ({ setBusqueda }) => {
    // Al input se le crea un state y se le inicia vacio.
    const [input, setInput] = useState('');

    // Creamos la función handleChange que será llamada cada vez que el usuario escriba algo en el input
    const handleChange = (e) => {
        // Actualizamos el estado input con el valor actual del input
        setInput(e.target.value);
        // Llamamos a la función setBusqueda para actualizar el estado de búsqueda en el componente Buscador
        setBusqueda(e.target.value);
    }; // En pocas palabras aca se esta actualizando el input y busqueda.

    // Renderizamos el componente con un input que llama a la función handleChange cada vez que se escribe algo en él
    return (
        <div className='buscador-container mb-5'>
            <label htmlFor='busqueda' className='buscador-label'>
                Navegar en el Mar-Ket
            </label>
            <input
                id='busqueda'
                type='text'
                placeholder=' ¿Cual coin bucearemos?'
                className='buscador-input'
                value={input}
                onChange={handleChange}
            />
        </div>
    );
};

export default Buscador;
