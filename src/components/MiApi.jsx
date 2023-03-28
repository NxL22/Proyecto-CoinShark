import { useEffect, useState } from 'react';

const MiApi = ({ busqueda }) => {
    //aca estamos inicializando el estado de datos y setDatos es para actualizar el State de datos.
    const [datos, setDatos] = useState([]);

    //Aca se define y se hace el llamado a la API.
    useEffect(() => {
        const obtenerCryptos = async () => {
            const respuesta = await fetch(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
            );
            const data = await respuesta.json(); //aca se pasa la respuesta a formato JSON.
            //Aca se filtran las criptomonedas segun la busqueda.
            const cryptos = data
                .filter((crypto) =>
                    crypto.name.toLowerCase().includes(busqueda.toLowerCase())
                )
                .map((crypto) => ({
                    id: crypto.id,
                    name: crypto.name,
                    image: crypto.image,
                    current_price: crypto.current_price,
                    market_cap: crypto.market_cap,
                })); // y aca las recorridas con map se hacen un nuevo array

                //Se ordenan las criptomonedas por market cap de mayor a menor, comparandose.
            cryptos.sort((a, b) => b.market_cap - a.market_cap);
            //se actualiza el estado de lo filtrado.
            setDatos(cryptos);
        };
        obtenerCryptos();
    }, [busqueda]); //Aca se renderiza esta funcion cuando se monta y cuando se cambia el (prop) de busqueda.

    //Aca se renderiza las criptos filtradas y ordenadas segun el metodo.
    return (
        <div className='coins'>
            <ol>
                {datos.map((crypto) => (
                    <li key={crypto.id}>
                        <img src={crypto.image} alt={crypto.name} />
                        <h2>{crypto.name}</h2>
                        <p>
                            <strong>Precio:</strong> {crypto.current_price.toFixed(2)}
                            <strong>
                                {' '}
                                <span className='signoDolar'>$</span>
                            </strong>
                        </p>
                        <p>
                            <strong>Market Cap:</strong>{' '}
                            {crypto.market_cap.toLocaleString('en', {
                                useGrouping: true,
                                maximumFractionDigits: 2,
                            })}
                            <strong>
                                <span className='signoDolar'> $</span>
                            </strong>
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default MiApi;
