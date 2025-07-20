import React from 'react'
import  {Stepper, Step, StepLabel } from "@mui/material"

const step=[
  'placed',
  'Order Confirmed',
  'Shipped',
  'Out of delivery',
  'Delivery'
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
      <Stepper activeStep={activeStep} alternativeLabel>
       {step.map((label)=><Step>
        <StepLabel sx={{color:'#9155FD',fontSize:'44px'}}>{label}</StepLabel>
       </Step>)} 
      </Stepper>
    </div>
  )
}

export default OrderTracker
