import React from 'react'

const Headers = () => {
  // theme toggle code.
  const changeTheme = () => {
    const nav = document.querySelector('.header');
    const search = document.querySelector('#search');
    const select = document.querySelector('.select');
    const btn = document.querySelector('.btn')
    const countryInfo = document.querySelectorAll('.country-info');
    const uls = document.querySelectorAll('ul')
    const searchIcon = document.querySelector('.search-icon')

      document.body.classList.toggle('light-theme');
      nav?.classList.toggle('light-theme');
      search?.classList.toggle('light-theme');
      select?.classList.toggle('light-theme');
      btn?.classList.toggle('light-theme')
      searchIcon?.classList.toggle('light-theme')

      countryInfo.forEach((info) => {
        info.classList.toggle('light-theme');
      })
    
      uls.forEach((ul) => {
        ul.classList.toggle('light-theme');
      })
  }

  return (
    <>
    <header className="header">
        <div>
            <h1>Where in the world?</h1>
        </div>

        <div>
            <i className="fas fa-moon" onClick={() => changeTheme()}><span>Dark Mode</span></i>
        </div>
    </header>
    </>
  )
}

export default Headers