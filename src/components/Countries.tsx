import React, { useEffect, useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { fetchCountries, searchCountries, filterCountriesByRegion, CountriesActionTypes,  } from './actions/actions';
import { AppState } from './actions/reducers';
import '../index.css'
import CustomSelect from './CustomSelect';

const Countries = () => {
  const dispatch: ThunkDispatch<AppState, null, CountriesActionTypes> = useDispatch();
  const { filteredCountries } = useSelector((state: AppState) => state);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const [searchText, setSearchText] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    dispatch(searchCountries(searchText));
  };


  const handleFilterByRegion = (region: string) => {
    dispatch(filterCountriesByRegion(region));
    setRegionFilter(region);
  };

  const regionOptions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

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
              <i className="fa-solid fa-magnifying-glass" id='search-icon' aria-hidden="true"></i>
            </div>
          </form>

          <form className='select'>
            <div className="region-filter" defaultValue={regionFilter}>
              <CustomSelect options={regionOptions} onSelectOption={handleFilterByRegion} />
            </div>
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
