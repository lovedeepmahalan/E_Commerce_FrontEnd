import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate=useNavigate()

  const handleCheckout=()=>{
    navigate('/checkout?step=2')
  }

  return (
    <div>
      {/* Main layout */}
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        {/* Left side: Cart items */}
        <div className="col-span-2">
          <CartItem />
        </div>

        {/* Right side: Price details */}
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border p-4 rounded-md shadow-sm">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold pt-3 text-black">
              <div className="flex justify-between">
                <span>Price</span>
                <span>₹4697</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className='text-green-600'>₹2000</span>
              </div>
              <div className="flex justify-between">
                <span className='text-green-600'>Dilivery Charge</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount</span>
                <span className='text-green-600'>₹2697</span>
              </div>
            </div>
            <Button onClick={handleCheckout} variant='contained' className='w-full mt-5' sx={{px:'2.5rem',py:'.7rem',bgcolor:"Violet"}}>
                    CheckOut
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart
