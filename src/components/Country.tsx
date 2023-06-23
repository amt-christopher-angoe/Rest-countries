import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access data from the Redux store
import '../country.css';

const Country = () => {
  const { name } = useParams();
  const countries = useSelector((state: any) => state.countries); // Access the countries data from the Redux store

  // Find the country object with the matching name from the URL parameter
  const country = countries.find((item: any) => item.name.common === name);

  // Return null if the country is not found
  if (!country) {
    return null;
  }

  const { flags, population, region, subregion, capital, tld, currencies, languages, borders } = country;
  const countryName = country.name;
  const currenciesObj = currencies as { [key: string]: { name: string } };
  console.log(country);
  return (
    <>
      <Link to="/" className="btn btn-light">
        <i className="fa-solid fa-arrow-left"></i><span className='btn-txt'>back</span>
      </Link>
      <section className="country">
        <article key={countryName.common}>
          <div className="country-inner">
            <div className="flag">
              <img src={flags.svg} alt={countryName.common} />
            </div>
            <div className="country-details">
              <div>
                <h2>{countryName.common}</h2>
                <h5>
                  Native Name: {typeof countryName.nativeName === 'object' ? (
                    (Object.values(countryName.nativeName) as Array<any>)[0]?.common
                  ) : (
                    <span>{countryName.nativeName}</span>
                  )}
                </h5>
                <h5>Population: <span>{population.toLocaleString()}</span></h5>
                <h5>Region: <span>{region}</span></h5>
                <h5>Sub Region: <span>{subregion}</span></h5>
                <h5>Capital: <span>{capital}</span></h5>
              </div>
              <div className="right">
                <h5>Top Level Domain: <span>{tld}</span></h5>
                <h5>Currencies: <span>{currenciesObj && Object.values(currenciesObj)[0].name}</span></h5>
                <h5>Languages: <span>{Object.values(languages)}</span></h5>
              </div>
            </div>
          </div>
          <div className="border-bottom">
            <h3>Borders:</h3>
            <div className="borders">
            {borders &&
              borders.map((border: string) => {
                const matchingCountry = countries.find((country: any) => country.cca3 === border);
                const countryName = matchingCountry ? matchingCountry.name.common : border;

                return (
                  <ul key={border}>
                   <li>{countryName}</li>
                  </ul>
                );
              })
            }
          </div>

          </div>
        </article>
      </section>
    </>
  );
};

export default Country;
