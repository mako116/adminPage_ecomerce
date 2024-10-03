import React from 'react'
 import { Route, Routes } from 'react-router-dom'
 import { Listproduct } from '../../components/Listproduct'
import AddProduct from '../../components/AddProduct'
import Sidebar from '../../components/Sidebar'
import { For } from '../../components/For'

export const Admin = () => {
  return (
    <div className=' lg:flex'>
      <Sidebar/>
        <Routes>
          <Route  path='/addproduct' element={<AddProduct />}/>
          <Route  path='/listproduct' element={<Listproduct />}/>
          <Route  path='/forproduct' element={<For />}/>
        </Routes>
       
    </div>
  )
}
