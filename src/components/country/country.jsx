import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountries}) => {
    const {name, flags, cca3} = country
    const[visited, setVisited] = useState(false)
    const handleVisited =()=>{
        setVisited(!visited)
    }
    const passWithParams =()=>{
        handleVisitedCountries(country)
    }
    // console.log(handleVisitedCountries)
    // console.log(country)
    return (
        <div className={`country ${visited? 'visited': 'not-visited'}`}>
            <img src={flags.png} alt="" />
            <h3 >Name: {name.common}</h3>
            <p><small>Code : {cca3}</small></p>
            <button onClick={handleVisited}>{visited? "visited": "going"}</button>
            {/* <p>{visited && 'I have visited'}</p> */}
            <button onClick={passWithParams}>Mark As Visited</button>
        </div>
    );
};

export default Country;