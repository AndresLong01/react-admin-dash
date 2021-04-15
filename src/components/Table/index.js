import React from 'react'

const Table = () => {
  return (
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

  )
}

export default Table
