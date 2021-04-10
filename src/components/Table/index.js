import React from 'react'

const Table = () => {
  return (
    <div className="recent-grid">
      {/* Make into Project component later */}
      <div className="projects">
        <div className="card">
          <div className="card-header">
            <h3>Recent Projects</h3>

            <button>See all <span className="las la-arrow-right"></span></button>
          </div>

          <div className="card-body">
            <div className="table-responsive">
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
                    <span class="status active"></span>
                        review
                      </td>
                </tr>
                <tr>
                  <td>Web Development</td>
                  <td>Frontend</td>
                  <td>
                    <span class="status flagged"></span>
                        in progress
                      </td>
                </tr>
                <tr>
                  <td>Ushop App</td>
                  <td>Mobile Team</td>
                  <td>
                    <span class="status new"></span>
                        pending
                      </td>
                </tr>
                <tr>
                  <td>UI/UX Design</td>
                  <td>UI Team</td>
                  <td>
                    <span class="status active"></span>
                        review
                      </td>
                </tr>
                <tr>
                  <td>Web Development</td>
                  <td>Frontend</td>
                  <td>
                    <span class="status flagged"></span>
                        in progress
                      </td>
                </tr>
                <tr>
                  <td>Ushop App</td>
                  <td>Mobile Team</td>
                  <td>
                    <span class="status new"></span>
                        pending
                      </td>
                </tr>
              </tbody>
            </table>
            </div>
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
            <div className="customer">
              <div className="info">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/54.png" width="40px" height="40px" alt=""></img>
                <div>
                  <h4>Collin Designer</h4>
                  <small>Mr. Design Business</small>
                </div>
              </div>
              <div className="contact">
                <span className="las la-user-circle"></span>
                <span className="las la-comment"></span>
                <span className="las la-phone"></span>
              </div>
            </div>
            <div className="customer">
              <div className="info">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/54.png" width="40px" height="40px" alt=""></img>
                <div>
                  <h4>Collin Designer</h4>
                  <small>Mr. Design Business</small>
                </div>
              </div>
              <div className="contact">
                <span className="las la-user-circle"></span>
                <span className="las la-comment"></span>
                <span className="las la-phone"></span>
              </div>
            </div>
            <div className="customer">
              <div className="info">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/54.png" width="40px" height="40px" alt=""></img>
                <div>
                  <h4>Collin Designer</h4>
                  <small>Mr. Design Business</small>
                </div>
              </div>
              <div className="contact">
                <span className="las la-user-circle"></span>
                <span className="las la-comment"></span>
                <span className="las la-phone"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
