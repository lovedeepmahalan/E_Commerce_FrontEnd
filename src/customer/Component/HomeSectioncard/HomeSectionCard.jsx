import React from 'react'

export default function HomeSectionCard({product}) {
  return (
    <div className='border border-black curor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top h-full w-full' src={product.imageUrl} alt=''/>
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-500'>{product.brand}</h3>
            <p className='mt-2 text-sm text-gray-300'>{product.title}</p>
        </div>
    </div>
  )
}
