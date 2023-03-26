import { useEffect, useState } from 'react';

const MiApi = () => {
    const [datos, setDatos] = useState([]);
    const [busqueda, setBusqueda] = useState()

    useEffect(() => {

        const obtenerCryptos = async () => {
            const respuesta = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

            const data = await respuesta.json();

            const cryptos = data.map((crypto) => ({
                id: crypto.id,
                name: crypto.name,
                image: crypto.image,
                current_price: crypto.current_price,
                market_cap: crypto.market_cap,
            }));
            cryptos.sort((a, b) => b.market_cap - a.market_cap);
            setDatos(cryptos);
        };
        obtenerCryptos();
    }, []); //para que se cargue solo en el montaje de la app.

    //esto se puede poner en otro componente mejor, como en el componente contenido? 
    return (
        <div className='coins'>
            <ol>
                {datos.map((crypto) => (
                    <li key={crypto.id}> {/* por ser lista necesito una key para que asi react sepa si ha tenido cambios. */}
                        <img src={crypto.image} alt={crypto.name} />
                        <h2>{crypto.name}</h2>
                        <p><strong>Precio:</strong> {crypto.current_price.toFixed(2)}<strong> <span className='signoDolar'>$</span></strong></p>
                        <p><strong>Market Cap:</strong> {crypto.market_cap.toLocaleString('en', { useGrouping: true, maximumFractionDigits: 2 })}<strong><span className='signoDolar'> $</span></strong></p>
                        {/*trate de ponerlo en 'es' pero los decimales no me los pone con , */}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default MiApi;
