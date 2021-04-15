import React from 'react'
import Cards from '../../components/Cards'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Table from '../../components/Table'
import Aside from '../../components/Aside'

const Main = () => {
  return (
    <>
      <Sidebar/>
      <div className="main-content">
        <Header />
        <main>
          <Cards/>
          <div className="recent-grid">
            <Table />
            <Aside />
          </div>
        </main>
      </div>
    </>
  )
}

export default Main
