import { useState } from 'react';
import Header from './components/Header';
import Buscador from './components/Buscador';
import MiApi from './components/MiApi';
import Footer from './components/Footer';

function App() {
  // Se define el estado de búsqueda usando el hook useState y se inicia en vacio.
  const [busqueda, setBusqueda] = useState('');

  return (
    <>
      <Header />
      {/*Buscador, se pasa la función setBusqueda como prop y actualiza el state en APP*/}
      <Buscador setBusqueda={setBusqueda} />
      {/*API, se pasa el estado de búsqueda como prop y usa el state de busqueda para buscar en la API*/}
      <MiApi busqueda={busqueda} />
      <Footer />
    </>
  );
}

export default App;

