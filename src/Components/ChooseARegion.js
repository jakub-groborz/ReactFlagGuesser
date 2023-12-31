import './ChooseARegion.scss'

function ChooseARegion({setCurrentContinent}) {

  const handleClick = e => {
    setCurrentContinent(e.target.id)
  }
    return (
      <div className='choose-region-wrapper'>
      <h1>Choose a region:</h1>
        <div className="buttons">
        <button id='Africa' onClick={handleClick}>Africa</button>
        <button id='North America' onClick={handleClick}>N.America</button>
        <button id='Europe' onClick={handleClick}>Europe</button>
        <button id='Oceania' onClick={handleClick}>Oceania</button>
        <button id='South America' onClick={handleClick}>S.America</button>
        <button id='Asia' onClick={handleClick}>Asia</button>
        </div>
        </div>
      );
}

export default ChooseARegion;