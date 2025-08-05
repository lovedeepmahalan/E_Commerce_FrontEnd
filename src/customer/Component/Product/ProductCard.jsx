import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {

  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/product/${product.id}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt='' />
      </div>
      <div>
        <p className='font-bold opacity-60'>{product.brand}</p>
        <p className='flex items-center'> {product.title}</p>
      </div>
      <div className='space-y-1'>
        <div>
          <p className='opacity-50  flex items-center'>{product.color}</p>
        </div>
        <div className='flex space-x-2 items-center'>
          <p className='font-semibold'>{product.discountedPrice}</p>
          <p className='line-through opacity-50'>{product.price}</p>
          <p className='text-green-600 font-semibold'>{product.discountPersent}% off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
