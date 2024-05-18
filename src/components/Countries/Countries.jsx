import { useEffect } from "react"
import { useState } from "react"
import Country from "../Country/Country"
import './Countries.css'

function Countries() {
    const [countries, serCountries] = useState([])
    const [visitedCountries, serVisitedCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(date => serCountries(date))
    },[])

    const handleVisitedCountries = country =>{
      console.log('add to ur visited country');
     const newVisitedCountries=[...visitedCountries,country];
     serVisitedCountries(newVisitedCountries)
     console.log(newVisitedCountries)
    }
  return (
    <div>
        <h3>Countries :{countries.length}</h3>
        <div>
          <h4>Visited country:{visitedCountries.length}</h4>
          <ul>
              {
                visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
              }
          </ul>
        </div>
       <div className="country-container">
          {
                countries.map(country =><Country
                   key={country.cca3} 
                   handleVisitedCountries={handleVisitedCountries}
                  country={country}></Country>)
          }
       </div>
    </div>
  )
}

export default Countries