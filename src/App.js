import './App.scss';

import { useState, useEffect } from 'react';

import ChooseARegion from './Components/ChooseARegion';
import Game from './Components/Game';

function App() {
	const [currentContinent, setCurrentContinent] = useState(undefined);

  const API = 'https://restcountries.com/v3.1/all'

  const [data, setData] = useState([]);
  const filteredData = data.filter((country) => country.continents.includes(currentContinent) && country.independent === true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        const result = await response.json();
        const dataModified = result.map(country => ({ ...country, answer: undefined }));
        setData(dataModified);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [currentContinent]);

	return (
		<div className="App">
			{currentContinent === undefined ? (
				<ChooseARegion setCurrentContinent={setCurrentContinent} />
			) : (
				<Game countries={filteredData} setCurrentContinent={setCurrentContinent}/>
			)}
		</div>
	);
}

export default App;
