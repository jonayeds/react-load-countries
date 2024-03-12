import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedcountries, setVisitedCountries] = useState([])
    const handleVisitedCountries = country =>{
        const newVisitedCountries = [...visitedcountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data =>setCountries(data))
    },[])
    return (
        <div >
            <h1>Countries : {countries.length}</h1>
            <h2>Visited Countries : {visitedcountries.length}</h2>
            <div>
                {
                    visitedcountries.map(country =><h4 key={country.cca3}>{country.name.common}</h4>
                    )
                }
            </div>
           <div className="countries">
           {
                countries.map(country =><Country handleVisitedCountries ={handleVisitedCountries}  key={country.cca3} country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;