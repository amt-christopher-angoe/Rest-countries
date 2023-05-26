import React from 'react'

const Headers = () => {
  const changeTheme = () => {
    const moon = document.querySelector('.fa-moon');
    const nav = document.querySelector('.header');
    const input = document.querySelector('#search');
    const select = document.querySelector('.select');
    const btn = document.querySelector('.btn')
    const countryInfo = document.querySelectorAll('.country-info');
  //  const uls = document.querySelectorAll('ul')

    moon?.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      nav?.classList.toggle('light-theme');
      input?.classList.toggle('light-theme');
      select?.classList.toggle('light-theme');
      btn?.classList.toggle('light-theme')

      countryInfo.forEach((info) => {
        info.classList.toggle('light-theme');
    })
    /*
    uls.forEach((ul) => {
      ul.classList.toggle('light-theme');
  })*/
    })  
  }

  return (
    <>
    <header className="header">
        <div>
            <h1>Where in the world?</h1>
        </div>

        <div>
            <i className="fas fa-moon" onClick={() => changeTheme()}>   Dark Mode</i>
        </div>
    </header>
    </>
  )
}

export default Headers