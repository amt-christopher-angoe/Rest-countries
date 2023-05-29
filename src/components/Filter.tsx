import React from 'react'

const Filter = () => {

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
  ]


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

  return (
    <>
    <section className="filter">
        <form className="form-control">
            <input 
              type="text" 
              name='search' id='search' 
              placeholder='Search for a country' 
              required/>
        </form>

        <form className='region-filter'>
            <select name="filter-by-region" id="filter-by-region" className='select' title='select'>
                <option value="Filter by region">Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
    </section>
    </>
  )
}

export default Filter