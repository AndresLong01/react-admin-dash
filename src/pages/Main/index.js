import React from 'react'
import Cards from '../../components/Cards'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Table from '../../components/Table'

const Main = () => {
  return (
    <>
      <Sidebar/>
      <div className="main-content">
        <Header />
        <main>
          <Cards/>
          <Table />
        </main>
      </div>
    </>
  )
}

export default Main
