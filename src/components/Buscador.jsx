const Buscador = () => {
    return (
        <div className='buscador-container mb-5'>
            <label htmlFor='busqueda' className='buscador-label'>Navegar en el Mar-Ket</label>
            <input
                id='busqueda'
                type='text'
                placeholder=' ¿Cual coin bucearemos?'
                className='buscador-input'
/*                 onChange={ (e) => {
                    setBusqueda(e.target.value)
                }}
                value={busqueda}
*/ 
            />
        </div>
    )
};

export default Buscador; 