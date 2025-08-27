import Grid from '@mui/material/Grid'
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'
import OrdersTableView from '../View/OrderView'
import ProductsTable from './ProductsTable'
const AdminDashBoard = () => {
  return (
    <div className='p-10'>
      <Grid container spacing={2}>
          <Grid className="shadow-lg shadow-gray-600" item xs={12} md={8}>
            <Achivement/>
          </Grid>
          <Grid className="shadow-lg shadow-gray-600" item xs={12} md={4}>
            <MonthlyOverview />
          </Grid>
          <Grid className="shadow-lg shadow-gray-600" item xs={12} md={4}>
            <OrdersTableView />
          </Grid>
           <Grid className="shadow-lg shadow-gray-600" item xs={12} md={4}>
            <ProductsTable/>
          </Grid>
      </Grid>
    </div>
  )
}

export default AdminDashBoard
