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
      const offset = Paginaact * 10; // Multiplica por el límite para obtener el offset correcto
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/series?ts=1&apikey=${apiKey}&hash=37c9ef894f960b6103830696d80b66cd&limit=10&offset=${offset}`
      );
      const data = await response.json();
      setSeries(data.data.results);
      setCargando(false);
      console.log(data)
    };

  return (
    <div>SeriesMarvel</div>
  )
}

export default SeriesMarvel