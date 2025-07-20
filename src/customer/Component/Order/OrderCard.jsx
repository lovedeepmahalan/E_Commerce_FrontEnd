import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from "@mui/icons-material/Adjust"
import { useNavigate } from 'react-router-dom'

const OrderCard = () => {
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-xl border'>
      <Grid container spacing={20} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70  ' alt=''/>

                <div className='ml5 space-y-2'>
                    <p className=''>Men slim Mid Rise Black Jeans</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                </div>
            </div>
        </Grid>
        <Grid item xs={20}>
          <p> ₹1099</p>
        </Grid>
        <Grid item xs={40}>
          {true && <div>
            <p>
            <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2 text-sm"/>
            <span>
              Delivered on march 13
            </span>
            <p>
              Your item has been delivered  
            </p>
            </p>
            </div>}
          {false && <p>
            <span>Expected delivery on march 13</span></p>}  
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
