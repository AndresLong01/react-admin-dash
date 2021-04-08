import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <h1><span className="lab la-accusoft"> X-Mackie</span></h1>
      </div>

      <div className="sidebar-menu">
        <ul>
          <li>
            <a href="https://www.google.com">
              <span className="las la-igloo"></span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="https://www.google.com">
              <span className="las la-users"></span>
              <span>Customers</span>
            </a>
          </li>
          <li>
            <a href="https://www.google.com">
              <span className="las la-clipboard-list"></span>
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="https://www.google.com">
              <span className="las la-clipboard-list"></span>
              <span>Orders</span>
            </a>
          </li>
          <li>
            <a href="https://www.google.com">
              <span className="las la-receipt"></span>
              <span>Inventory</span>
            </a>
          </li>
          <li>
            <a href="https://www.google.com">
              <span className="las la-user-circle"></span>
              <span>Accounts</span>
            </a>
          </li>
          <li>
            <a href="https://www.google.com">
              <span className="las la-clipboard-list"></span>
              <span>Tasks</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
