import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function OrderDetails() {
  return (
    <div className='px-5 lg:px-20'>
      <div className='px-5 lg:px-20'>
        <h1 className='font-bold text-xl py-5 text-left'>Delivery Address</h1>
        <AddressCard />
      </div>
      <div className='py-20'>
        <OrderTracker activeStep={3} />
      </div>
      <Grid className='space-x-5' container>
       <Grid
  container
  sx={{
    alignItems: 'center',
    justifyContent: 'space-between',
  }}
  className="shadow-xl rounded-md p-5 border"
>
  <Grid item xs={6} className="flex items-center text-left">
    <img
      className="w-[5rem] h-[5rem] object-cover object-top"
      src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
      alt=""
    />
    <div className="space-y-2 ml-5">
      <p>Men Slim Mid Rise Black Jeans</p>
      <p className="space-x-5">
        <span>Color: Pink</span> <span>Size: M</span>
      </p>
      <p>Seller: lineria</p>
      <p>₹1099</p>
    </div>
  </Grid>

  <Grid item>
    <Box sx={{ color: deepPurple[500], display: 'flex', alignItems: 'center' }}>
      <StarBorderIcon sx={{ fontSize: '2rem' }} fontSize={'2px'} className="px-2 text-5xl" />
      <span>Rate & Review Product</span>
    </Box>
  </Grid>
</Grid>
      </Grid>
    </div>
  )
}
