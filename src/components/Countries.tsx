import React, { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { fetchCountries, searchCountries, filterCountriesByRegion, Country, CountriesActionTypes  } from './actions/actions';
import { AppState } from './actions/reducers';
import '../index.css'

const Countries = () => {
  const dispatch: ThunkDispatch<AppState, null, CountriesActionTypes> = useDispatch();
  const { filteredCountries, loading, error } = useSelector((state: AppState) => state);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const [searchText, setSearchText] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    dispatch(searchCountries(searchText));
  };
/*
  const handleFilterByRegion = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const selectedRegion = e.target.value;
    dispatch(filterCountriesByRegion(selectedRegion));
    setRegionFilter(selectedRegion);
  };*/

  const handleFilterByRegion = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    dispatch(filterCountriesByRegion(e.target.value));
  };

  return (
    <>
     
        <section className="filter">
          <form onSubmit={handleSearch} className="form-control">
            <input
              type="text"
              name='search'
              id='search'
              placeholder="Search countries"
              required
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div className="icon">
              <i className="fa-solid fa-magnifying-glass search-icon" aria-hidden="true"></i>
            </div>
          </form>
          {/*onSubmit={handleFilterByRegion*/}
          <form  className="region-filter">
            <select
              name="filter-by-region"
              id="filter-by-region"
              className='select'
              title='select'
              value={regionFilter}
              onChange={handleFilterByRegion}
            >
              <option selected disabled>
              Filter by Region
              </option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </form>
          </section>
          
          <section className="grid">
          {filteredCountries.map((country) => {
            const { name, population, region, capital, flags } = country;
            return (
              <article key={name.common}>
                <div>
                  <Link to={`/countries/${name.common}`}>
                    <img src={flags.png} alt={name.common} />
                  </Link>
                  <div className="country-info">
                    <h3 className="country-name">{name.common}</h3>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
  
      
    </>
  );
};

export default Countries;
