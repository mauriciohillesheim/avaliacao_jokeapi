// src/pages/Piadas/index.jsx

import React, { useState } from 'react';
import './styles.css'; // Certifique-se de criar um arquivo de estilos se necessário

const Piadas = () => {
  const [piada, setPiada] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPiada = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.type === 'single') {
        setPiada(data.joke);
      } else {
        setPiada(`${data.setup} - ${data.delivery}`);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a joke when the component mounts
  React.useEffect(() => {
    fetchPiada();
  }, []);

  return (
    <div className="piadas-container">
      <h1>Piadas</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && <p>{piada}</p>}
      <button onClick={fetchPiada} className="fetch-button">
        Buscar nova piada
      </button>
    </div>
  );
};

export default Piadas;
