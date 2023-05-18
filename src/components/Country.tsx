import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import '../country.css'

const Country = () => {

    const [country, setCountry] = useState([])
    const { name } = useParams()


    useEffect(() => {
        const fetchCountryDetails = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const country = await response.json()
            setCountry(country)
            console.log(country)
        }

        fetchCountryDetails()
    }, [])



/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */
/* Style country components ts = 40.00 */


  return (
    <>
    <Link to='/' className='btn btn-light'><i className='fas fa-arrow-left'>Back</i></Link>
    <section className="country">
        {country.map((c) => {
            const {ccn3, flags, name, nativeName, population, region,subregion, capital, tld, currencies, languages, borders } = c

            return(
                <article key={ccn3}>
                    <div className="flag">
                        <img src={flags['svg']} alt={name['common']} />
                    </div>
                    <div className="country-details">
                        <div>
                            <h2>{name['common']}</h2>
                            <h5>Native Name: {name['nativeName'[0]]}</h5>/* correct this*/
                            <h5>Population: {population}</h5>
                            <h5>Region: {region}</h5>
                            <h5>Sub Region: {subregion}</h5>
                            <h5>Capital: {capital}</h5>
                        </div>
                        <div>
                            <h5>Top Level Domain: {tld}</h5>
                            <h5>Currencies: {}</h5>
                            <h5>Languages: {}</h5>
                            
                            
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