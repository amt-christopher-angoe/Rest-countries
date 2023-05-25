import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import '../country.css'

const Country = () => {

    const [country, setCountry] = useState([]);
    const { name } = useParams();


    useEffect(() => {
        const fetchCountryDetails = async () => {
         const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            const country = await response.json();
            setCountry(country);
            console.log(country);
            
        }  

        fetchCountryDetails()
    }, [])
/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */

/*
interface singleCountry {
    altSpellings: string[];
    area: number;
    capital: string[];
    capitalInfo: { latlng: number[] };
    car: { signs: string[]; side: string };
    cca2: string;
    cca3: string;
    ccn3: string;
    coatOfArms: { png: string; svg: string };
    continents: string[];
    currencies: { [key: string]: { name: string } };
    demonyms: { [key: string]: { name: string } };
    flag: string;
    flags: { png: string; svg: string };
    idd: { root: string; suffixes: string[] };
    independent: boolean;
    landlocked: boolean;
    languages: { [key: string]: string };
    latlng: number[];
    maps: { googleMaps: string; openStreetMaps: string };
    name: { common: string; official: string; nativeName: { [key: string]: string } };
    population: number;
    region: string;
    startOfWeek: string;
    status: string;
    subregion: string;
    timezones: string[];
    tld: string[];
    translations: { [key: string]: { official: string; common: string } };
    unMember: boolean;
  }
  */


  return (
    <>
    <Link to='/' className='btn btn-light'><i className='fas fa-arrow-left'>Back</i></Link>
    <section className="country">
        {country.map((item: any) => {
            const {ccn3, flags, name, population, region,subregion, capital, tld, currencies, languages } = item

            return(
                <article key={ccn3}>
                    <div className="flag">
                        <img src={flags['svg']} alt={name['common']} />
                    </div>
                    <div className="country-details">
                        <div>
                            <h2>{name['common']}</h2>
                            <h5>Native Name:  {typeof name['nativeName'] === 'object' ? (
                            <p>{(Object.values(name['nativeName']) as Array<any>)[0]?.['common']}</p>
                            ) : (
                            <p>{name['nativeName']}</p>
                            )}</h5>
                            <h5>Population: {population}</h5>
                            <h5>Region: {region}</h5>
                            <h5>Sub Region: {subregion}</h5>
                            <h5>Capital: {capital}</h5>
                        </div>
                        <div>
                            <h5>Top Level Domain: {tld}</h5>
                            <h5>Currencies: {Object.values(currencies as { [key: string]: { name: string; symbol: string } })[0].name}
                            </h5>
                            <h5>Languages: {Object.values(languages as {key: string})}</h5>
                        </div>

                        
                    </div>
                    <div>
                        <h3>Borders: {}</h3>
                    </div>
                </article>
            )
        })}
    </section>
    
    </>
  )
}

export default Country