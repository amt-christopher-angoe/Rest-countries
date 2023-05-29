import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
// api link
const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
    const region = [
        {
          name: "Europe"
        },
        {
          name: "Asia"
        },
        {
          name: "Africa"
        },
        {
          name: "Oceania"
        },
        {
          name: "Americas"
        }
      ];
    
    
    //use state values for search
    const [searchText, setSearchText] = useState('');
      // use state for loading country information
    const [Countries, setCountries] = useState([])
    // data fetch
        const fetchCountryData = async() => {
        try{
            const response = await fetch(url);
            const countries = await response.json();
            setCountries(countries);
           /* console.log(countries)*/
        } catch(error) {
            console.log(error);
        };
        } ;
    
        useEffect(() => {
            fetchCountryData();
        }, []);
    
    
//search function  
      window.addEventListener('DOMContentLoaded', () => {
      const search = document.getElementById('search');
    
      search?.addEventListener('input', (e: any) => {
        const { value } = e.target;
    
        const countryName = document.querySelectorAll('.country-name');
    
        countryName.forEach((country: any) => {
          if (country.innerText.toLowerCase().includes(value.toLowerCase())) {
            country.parentElement.parentElement.style.display = 'block';
          } else {
            country.parentElement.parentElement.style.display = 'none';
          }
        });
      })
    })

    // get request to return individual searched country and update the page
    async function searchCountry() {
        try {
          const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`);
          const data = await res.json();
          setCountries(data);
        } catch (error) {
          console.log(error);
        }    ;
    };
    // get request to filter by region
    async function filterByRegion(region: any) {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
            const data = await res.json();
            setCountries(data);
        } catch (error) {
            console.log(error);
        };
    };



        function handleSearch(e: any) {
        e.preventDefault();
        searchCountry();
        }   ; 


        function handleFilterByRegion(e: any) {
            e.preventDefault();
            filterByRegion(region);
        };

  return (
    //html structure of both filter bar and home page html structure
    <>
    <section className="filter">
        <form onSubmit={handleSearch} className="form-control">
            <input 
              type="text" 
              name='search' id='search' 
              placeholder='Search for a country' 
              required
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}/>
        </form>

        <form onSubmit={handleFilterByRegion} className='region-filter'>
            <select 
            name="filter-by-region" 
            id="filter-by-region" 
            className='select' 
            title='select'
            onChange={e => filterByRegion(e.target.value)}
            >
              {region.map((region, index) => (
                <option key={index} value={region.name}>{region.name}</option>
              ))}
            </select>
        </form>
    </section>


    <section className='grid'>
        {Countries.map((country: any) => {
            const {  
                name, 
                population, 
                region, 
                capital, 
                flags 
            } =country

            return (
            <article key={name['common']}>
                <div>
                <Link to={`/countries/${name['common']}`}>
                    <img src={flags['svg']} alt={name['common']} />
                </Link>
                        <div className="country-info">
                            <h3 className='country-name'>{name['common']}</h3>
                            <h4>Population: <span>{population.toLocaleString()}</span></h4>
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