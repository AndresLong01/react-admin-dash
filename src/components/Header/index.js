import React from 'react'

const Header = () => {
  return (
    <header>
        <h2>
          <label for="nav-toggle">
            <span className="las la-bars"></span>
          </label>

          Dashboard
        </h2>
        <div className="search-wrapper">
          <span className="las la-search"></span>
          <input type="search" placeholder="Search here"></input>
        </div>

        <div className="user-wrapper">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png" alt=""></img>
          {/* <img src="https://pbs.twimg.com/media/EgWJhEKWoAI--rL.jpg"></img> */}
          <div>
            <h4>Mackie Mack Mack</h4>
            <small>administrator</small>
          </div>
        </div>
        {/* <button onClick={information}>search</button> */}
      </header>
  )
}

export default Header
