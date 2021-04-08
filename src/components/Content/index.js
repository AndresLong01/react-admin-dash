import React, { useState } from 'react'
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
      {/* Make into Header component later */}
      <header>
        <h2>
          <label>
            <span className="las la-bars"></span>
          </label>

          Dashboard
        </h2>
        <div className="search-wrapper">
          <span className="las la-search"></span>
          <input type="search" placeholder="Search here"></input>
        </div>

        <div className="user-wrapper">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png"></img>
          {/* <img src="https://pbs.twimg.com/media/EgWJhEKWoAI--rL.jpg"></img> */}
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

          <div className="card-single">
            <div>
              <h1>79</h1>
              <span>Projects</span>
            </div>
            <div>
              <span className="las la-clipboard"></span>
            </div>
          </div>

          <div className="card-single">
            <div>
              <h1>123</h1>
              <span>Orders</span>
            </div>
            <div>
              <span className="las la-shopping-bag"></span>
            </div>
          </div>

          <div className="card-single">
            <div>
              <h1>$6k</h1>
              <span>Income</span>
            </div>
            <div>
              <span className="las la-google-wallet"></span>
            </div>
          </div>

        </div>

        <div className="recent-grid">
          {/* Make into Project component later */}
          <div className="projects">
            <div className="card">
              <div className="card-header">
                <h3>Recent Projects</h3>

                <button>See all <span className="las la-arrow-right"></span></button>
              </div>

              <div className="card-body">
                <table>
                  <thead>
                    <tr>
                      <td>Project Title</td>
                      <td>Department</td>
                      <td>Status</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>UI/UX Design</td>
                      <td>UI Team</td>
                      <td>
                        <span class="status"></span>
                        review
                      </td>
                    </tr>
                    <tr>
                      <td>Web Development</td>
                      <td>Frontend</td>
                      <td>
                        <span class="status"></span>
                        in progress
                      </td>
                    </tr>
                    <tr>
                      <td>Ushop App</td>
                      <td>Mobile Team</td>
                      <td>
                        <span class="status"></span>
                        pending
                      </td>
                    </tr>
                    <tr>
                      <td>UI/UX Design</td>
                      <td>UI Team</td>
                      <td>
                        <span class="status"></span>
                        review
                      </td>
                    </tr>
                    <tr>
                      <td>Web Development</td>
                      <td>Frontend</td>
                      <td>
                        <span class="status"></span>
                        in progress
                      </td>
                    </tr>
                    <tr>
                      <td>Ushop App</td>
                      <td>Mobile Team</td>
                      <td>
                        <span class="status"></span>
                        pending
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* These two can be made into a single table component with props changing their value, dumb */}
          {/* Make into customer component later*/}
          <div className="customers">
            <div className="card">
              <div className="card-header">
                <h3>New Customers</h3>

                <button>See all <span className="las la-arrow-right"></span></button>
              </div>

              <div className="card-body">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Content
