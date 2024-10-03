import React, { useState } from 'react'
import impd from "../assets/upload.jpg"
 const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productdetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price:"",
    old_price: ""
  })
  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }

  const changeHandler = (e) =>{
    setProductDetails({...productdetails, [e.target.name]:e.target.value})
  }
  return (
    <div className='p-8 box-border bg-slate-100/60 w-full rounded-sm mt-4 lg:m-7'> 
    <div className="mb-3">
      <h4 className='font-bold pb-2'>Product title</h4>
      <input value={productdetails.name} onChange={changeHandler} type="text" name='name' placeholder='typehere' 
      className=' bg-slate-200 outline-none max-w-80 w-full py-3 px-4 rounded-md ' />
    </div>
    <div className="mb-3">
      <h4 className='font-bold pb-2'>Offer Price</h4>
      <input value={productdetails.old_price} type="text" name='name' placeholder='typehere' 
      className=' bg-slate-200 outline-none max-w-80 w-full py-3 px-4 rounded-md ' />
    </div>
    <div className="mb-3">
      <h4 className='font-bold pb-2'>Product title</h4>
      <input value={productdetails.new_price} type="text" name='name' placeholder='typehere' 
      className=' bg-slate-200 outline-none max-w-80 w-full py-3 px-4 rounded-md ' />
    </div>
    <div className="mb-3 flex items-center gap-x-4">
      <h4 className='font-bold pb-2'>Product Category:</h4>
      <select name="category" id="" className=' bg-slate-100 outline-none border-none rounded-sm'>
        <option value="women">women</option>
        <option value="men">men</option>
        <option value="kids">kids</option>
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="file-input" className=''>
         
        <img src={image?URL.createObjectURL(image):impd} alt="" className='w-20 rounded-sm shadow-sm inline-block cursor-pointer' />
      </label>
      <input onChange={imageHandler} type="file" name='image' id='file-input' hidden className=' bg-slate-100
      max-w-80' />
    </div>
    <button className='bg-gray-700 py-2 px-7 rounded-sm border-none max-w-70'>
      Submit
    </button>
    </div> 
  )
}
export default AddProduct