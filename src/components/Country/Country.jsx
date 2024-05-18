import { useState } from 'react';
import './Country.css';
// import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country,handleVisitedCountries}) => {
    // console.log(country);
    const {name, flags ,maps, population, region,capital,} = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = ()=>{
        setVisited(!visited);
    }
    // 
    // const passWithParams = ()=>{
    //     handleVisitedCountries(country);
    // }
    // const passWithParams = ()=> handleVisitedCountries(country);
    
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited?'purple':'green'}}>Name:{name?.common}</h3>
            <img src={flags?.png}/>
            <p>{maps.googleMaps}</p>
            <p>Population:{population}</p>
            <p>region:{region}</p>
            <p>Capital:{capital}</p>
                    
            {/* <button onClick={passWithParams}>Mark Visited</button>  */}
            <button onClick={()=> handleVisitedCountries(country)}>Mark Visited</button> 
            <br /> 
            <button onClick={handleVisited}>{visited ?'Visited':'Going'}</button>
            {visited ? '  I have visited this country.': 'I want to visit'}
            <hr />
            {/* <CountryDetail>
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            </CountryDetail> */}
        </div>
    );
};

export default Country;