import React from 'react'
 import addProducts from "../assets/construct.jpg"
import listproduc from "../assets/Factories.png"
import { Link } from 'react-router-dom'

 const Sidebar = () => {
  return (
    <div className='py-2 flex justify-center gap-x-1 gap-y-5 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6 '>
        <Link to={'/addproduct'}>
        <button  className=' flex items-center justify-center gap-2 rounded-md bg-slate-100 h-14 w-44  font-medium'>
            <img src={addProducts} alt=""
            height={55}
            width={55} />
            <span>Add Product</span>
        </button>
        </Link>
         <Link to={'/listproduct'} >
        <button className=' flex items-center justify-center gap-2 rounded-md bg-slate-100 h-14 w-44  font-medium'>
            <img src={listproduc} alt=""
            height={55}
            width={55} />
            <span> Product lists</span>
        </button>
        </Link>

        <Link to={'/forproduct'} >
        <button className=' flex items-center justify-center gap-2 rounded-md bg-slate-100 h-14 w-44  font-medium'>
            <img src={listproduc} alt=""
            height={55}
            width={55} />
            <span> forproductss </span>
        </button>
        </Link>
    </div>
  )
}

export default Sidebar
