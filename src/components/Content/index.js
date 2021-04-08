import React, {useState} from 'react'
// import API from "../../utils/API";

const Content = () => {
  // const [imgUrl, setImg] = useState("")

  // const information = event => {
  //   API.searchPoke()
  //     .then(res => {
  //       setImg(res.data.sprites.front_default)
  //       console.log(res.data.sprites.front_default)
  //     })
  // }
  return (
    <div className="main-content">
      <header>
        <h1>
          <label>
            <span className="las la-bars"></span>
          </label>

          Dashboard
        </h1>
        <div className="search-wrapper">
          <span className= "las la-search"></span>
          <input type="search" placeholder="Search here"></input>
        </div>

        <div className="user-wrapper">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png"></img>
          <div>
              <h4>Mackie Mack Mack</h4>
              <small>administrator</small>
          </div>
        </div>
        {/* <button onClick={information}>search</button> */}
      </header>

      <main>
        <div className="cards">
          <div className="card-single">
            <div>
              <h1>54</h1>
              <span>Customer</span>
            </div>
            <div>
              <span className="las la-users"></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Content
