import React, {useState, useEffect} from 'react'

const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
    const [Countries, setCountries] = useState([])

    const fetchCountryData = async() => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries)
    }

    useEffect(() => {
        fetchCountryData()
        }, [])
  return (
    <>
    <section className='grid'>
        {Countries.map((country) => {
            const { 
                ccn3, 
                name, 
                population, 
                region, 
                capital, 
                flags 
            } =country

            return (<article key={ccn3}>
                <div>
                    <img src={flags['svg']} alt={name['common']} />
                        <div className="country-info">
                            <h3>{name['common']}</h3>
                            <h4>Population: <span>{population}</span></h4>
                            <h4>Region: <span>{region}</span></h4>
                            <h4>Capital: <span>{capital}</span></h4>
                        </div>
                </div>
            </article>)
        })}
    </section>
    </>
  )
}

export default Countries