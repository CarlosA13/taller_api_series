import React, { useEffect, useState } from 'react';

const SeriesMarvel = () => {
    const [series, setSeries] = useState([]);
    const [Paginaact, setPaginaact] = useState(0);
    const [Cargando, setCargando] = useState(false);
  
    useEffect(() => {
      if (Cargando) {
        fetchSeries();
      }
    }, [Cargando]);
  
    const fetchSeries = async () => {
      const apiKey = 'e51e499cba2aac51bd9d088e0a2df483';
      const offset = Paginaact * 20; // Multiplica por el límite para obtener el offset correcto
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/series?ts=1&apikey=${apiKey}&hash=37c9ef894f960b6103830696d80b66cd&limit=10&offset=${offset}`
      );
      const data = await response.json();
      setSeries(data.data.results);
      setCargando(false);
      console.log(data)
    };

    const handleLoadSeries = () => {
        setPaginaact(0); // Reinicia la página al cargar nuevas series
        setCargando(true);
      };
    
      const handlePreviousPage = () => {
        if (Paginaact > 0) {
          setPaginaact(Paginaact - 1);
          setCargando(true);
        }
      };
    
      const handleNextPage = () => {
        setPaginaact(Paginaact + 1);
        setCargando(true);
      };

  return (
    <div>
      <h1>Series de Marvel</h1>
      <h2>PD: Algunas imágenes no funcionan</h2>
      <div>
        <button onClick={handleLoadSeries}>Cargar Series</button>
        <button onClick={handlePreviousPage}>Anterior</button>
        <button onClick={handleNextPage}>Siguiente</button>
      </div>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>
            <h3>{serie.title}</h3>
            <img
              src={`${serie.thumbnail.path}/standard_fantastic.${serie.thumbnail.extension}`}
              alt={serie.title}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SeriesMarvel