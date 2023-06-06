import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import '../country.css'

const Country = () => {

    const [country, setCountry] = useState([]);
    const { name } = useParams();


    useEffect(() => {
        const fetchCountryDetails = async () => {
            try{
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                const country = await response.json();
                setCountry(country);
                console.log(country);
            } catch (error) {
                console.log(error);
            }
        }  

        fetchCountryDetails()
    }, [name])


// type interface for single country data

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
    // html structure for single country page
    <>
    <Link to='/' className='btn btn-light'><i className='fas fa-arrow-left'> Back</i></Link>
    <section className="country">
        {country.map((item: any) => {
            const { flags, name, population, region,subregion, capital, tld, currencies, languages, borders } = item;
/*
            const countryCode = {ccn3};

            fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
            .then(response => response.json())
            .then(data => {const borderCountries = data.borders;
                console.log(borderCountries)
            })
            .catch(error => {
                console.log(error)
            })
*/
            return(
                <article key={name['common']}>
                    <div className="country-inner">
                    <div className="flag">
                        <img src={flags['svg']} alt={name['common']} />
                    </div>
                    <div className="country-details">
                        <div>
                            <h2>{name['common']}</h2>
                            <h5>Native Name: <span> {typeof name['nativeName'] === 'object' ? (
                            <p>{(Object.values(name['nativeName']) as Array<any>)[0]?.['common']}</p>
                            ) : (
                            <p>{name['nativeName']}</p>
                            )}</span></h5>
                            <h5>Population: <span>{population.toLocaleString()}</span></h5>
                            <h5>Region: <span>{region}</span></h5>
                            <h5>Sub Region: <span>{subregion}</span></h5>
                            <h5>Capital: <span>{capital}</span></h5>
                        </div>
                        <div className='right'>
                            <h5>Top Level Domain: <span>{tld}</span></h5>
                            <h5>Currencies: <span>{Object.values(currencies as { [key: string]: { name: string; symbol: string } })[0].name}</span>
                            </h5>
                            <h5>Languages: <span>{Object.values(languages as {key: string})}</span>
                            {/*languages.map((languages: any) => {
                                return(
                                <ul key={languages}>
                                    <li>{languages}</li>
                                </ul>
                                )
                            })*/}
                            </h5>
                        </div>
        
                    </div>    
                    </div>
                    <div className='border-bottom'>
                        <h3>Borders:</h3>
                        <div className="borders">
                        {/*Object.values(borders as { key: string})*/}
                        {item['borders'] &&
                        <>
                            {borders.map((borders: any) => {
                                return (
                                    <ul key={borders}>
                                        <li>{borders}</li>
                                    </ul>
                                    )
                             })}
                        </>
                        }
                        </div>
                    </div>
                </article>
            )
        })}
    </section>
    
    </>
  )
}

export default Country